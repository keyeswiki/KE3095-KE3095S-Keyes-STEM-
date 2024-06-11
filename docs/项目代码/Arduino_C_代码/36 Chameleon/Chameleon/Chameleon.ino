/*  
 * 名称   : Chameleon
 * 功能   : 旋转编码器控制RGB模拟变色龙
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <FastLED.h>

//旋转编码器的接口
int CLK = 3;
int DT = A5;
int SW = A4;

#define NUM_LEDS 4     //定义SK6812 RGB模块上LED灯珠数量
#define LED_PIN  2     //定义SK6812 RGB模块控制引脚为D2
CRGB leds[NUM_LEDS];

int counter = 0;  //定义变量counter
int currentStateCLK;  //定义变量currentStateCLK
int lastStateCLK;  //定义变量lastStateCLK

String currentDir ="";
unsigned long lastButtonPress = 0;

int val;

void setup() {
  Serial.begin(9600);   //设置波特率
// 将编码器引脚设置为输入
  pinMode(CLK,INPUT);
  pinMode(DT,INPUT);
  pinMode(SW,INPUT_PULLUP);
// 读取CLK的初始状态
  lastStateCLK = digitalRead(CLK);
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);   //设置SK6812 RGB的亮度
}

void loop() {
  // 读取CLK的当前状态
  currentStateCLK = digitalRead(CLK);
 
  //如果CLK的上一个状态和当前状态不同，则表示发生了脉冲
  //仅对一个状态变化做出响应，以避免重复计数
  if (currentStateCLK != lastStateCLK  && currentStateCLK == 1){
 
   //如果DT状态不同于CLK状态，则编码器将旋转CW，因此减小
    if (digitalRead(DT) != currentStateCLK) {
      counter--;
      Serial.print(counter);
      Serial.print("  ");
      val = counter % 3;
      Serial.println(val);
    } else {
      //编码器旋转CCW所以递增
      counter ++;
      Serial.print(counter);
      Serial.print("  ");
      val = counter % 3;
      Serial.println(val);
    }
  }
 
  //记住上次的CLK状态
  lastStateCLK = currentStateCLK;
 
  //读取按钮状态
  int btnState = digitalRead(SW);
 
  //如果检测到低信号，则按钮被按下
  if (btnState == 0) {
  //如果距离上一次低脉冲时间已经过去50ms，则意味着按钮被按下、释放并再次按下
    if (millis() - lastButtonPress > 50) {
      Serial.println("Button pressed!");
    }
 
    //记住上次按按钮事件
    lastButtonPress = millis();
  }
 
  //添加一个轻微的延迟来帮助缓冲阅读
  delay(5);

  if (val == 0) {
    //红色灯
    fill_solid(leds, NUM_LEDS, CRGB::Red);   // SK6812RGB模块4个LED灯珠亮红色灯
    FastLED.show();
  } else if (val == 1) {
    //绿色灯
    fill_solid(leds, NUM_LEDS, CRGB::Green);   // SK6812RGB模块4个LED灯珠亮绿色灯
    FastLED.show();
  } else {
    //蓝色灯
    fill_solid(leds, NUM_LEDS, CRGB::Blue);   // SK6812RGB模块4个LED灯珠亮蓝色灯
    FastLED.show();
  }
}