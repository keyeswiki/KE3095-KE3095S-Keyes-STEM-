/*  
 * 名称   : Ultrasonic radar
 * 功能   : 超声波控制TFT显示屏，蜂鸣器和RGB灯模拟超声波雷达
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <SPI.h>
#include <FastLED.h>  //导入FastLED库文件

// 定义TFT屏的引脚
#define CS   8
#define RST  9
#define DC   10
#define MOSI  11
#define SCK   13

Adafruit_ST7735 tft = Adafruit_ST7735(CS, DC, RST);

#define BUZZER_PIN  A2    //定义无源蜂鸣器引脚为A2

#define NUM_LEDS  4   //定义SK6812 RGB模块上LED灯珠数量
#define LED_PIN  3   //定义SK6812 RGB模块控制引脚为D3
CRGB leds[NUM_LEDS];

int TrigPin = 2; //设置Trig引脚为D2
int EchoPin = 6; //设置Echo引脚为D6
int distance;     //超声波测量距离

float checkdistance() { //得到的距离
  // 事先给一个短的低电平，以确保一个干净的高脉冲;
  digitalWrite(TrigPin, LOW);
  delayMicroseconds(2);
  // 传感器由10微秒或更长时间的高脉冲触发
  digitalWrite(TrigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(TrigPin, LOW);
  // 从传感器读取信号:一个高电平脉冲
  // 它的持续时间是从发送ping命令到从对象接收回显的时间(以微秒为单位)
  float distance = pulseIn(EchoPin, HIGH) / 58.00;  //转换成距离
  delay(300);
  return distance;
}

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);  // 设置蜂鸣器为输出模式
  pinMode(TrigPin, OUTPUT);     //设置Trig引脚作为输出
  pinMode(EchoPin, INPUT);      //设置Echo引脚作为输入
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);   //设置SK6812 RGB的亮度
  tft.initR(INITR_BLACKTAB); // 屏幕初始化
  tft.fillScreen(ST7735_BLACK); // 清屏 
  delay(1000);
}

void loop() {
  tft.setTextSize(1);   //设置显示字符大小
  tft.setRotation(1);   //反转90°
  tft.setTextColor(ST7735_WHITE); //设置显示字符为白色
  tft.fillScreen(ST7735_BLACK);  // 清屏 
  distance = checkdistance();//超声波测距
  tft.setCursor(10, 50);  //设置显示的位置
  tft.print("distance:");  //打印字符
  tft.setCursor(70, 50); 
  tft.print(distance);
  tft.setCursor(100, 50);  //设置显示的位置
  tft.print("cm");  //打印字符
  delay(300);
  tft.fillScreen(ST7735_BLACK); // 清屏  
  if (distance <= 10) {   
    fill_solid(leds, NUM_LEDS, CRGB::Red);  // SK6812 RGB模块4个LED灯珠亮红色灯
    FastLED.show();
    tone(BUZZER_PIN, 262); //DO播放1000ms
    delay(1000);

} else if (distance > 10 && distance <= 20) {
    fill_solid(leds, NUM_LEDS, CRGB::Green);  // SK6812 RGB模块4个LED灯珠亮绿色灯
    FastLED.show();
    tone(BUZZER_PIN, 349); //Fa播放500ms
    delay(500);

} else {
    fill_solid(leds, NUM_LEDS, CRGB::Blue);  // SK6812 RGB模块4个LED灯珠亮蓝色灯
    FastLED.show();
    tone(BUZZER_PIN, 494); //Si播放125ms
    delay(125);
  }
}
