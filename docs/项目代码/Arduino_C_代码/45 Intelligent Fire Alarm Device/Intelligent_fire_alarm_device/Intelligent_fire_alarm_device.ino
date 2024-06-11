/*  
 * 名称   : Intelligent_fire_alarm_device
 * 功能   : 火焰传感器控制130风扇模块，RGB模块和蜂鸣器
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <FastLED.h>

#define NUM_LEDS 4   //定义SK6812 RGB模块上LED灯珠数量
#define LED_PIN  3   //定义SK6812 RGB模块控制引脚为D3
CRGB leds[NUM_LEDS];

#define firePin  A5  //定义火焰传感器引脚为A5
#define buzzerPin 2  //定义有源蜂鸣器引脚为D2
#define INA 4  //INA对应IN+，引脚为D4
#define INB 5  //INB对应IN-，引脚为D5

int item = 0;

void setup() {
  Serial.begin(9600);
  pinMode(firePin, INPUT);  //将firePin设置为输入模式
  pinMode(buzzerPin, OUTPUT); //将buzzerPin设置为输出模式
  pinMode(INA, OUTPUT); //将INA设置为输出模式
  pinMode(INB, OUTPUT);//将INB设置为输出模式
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);   //设置SK6812 RGB的亮度
}

void loop() {
  item = analogRead(firePin);//将火焰传感器连接到A5上，将模拟值读取到item
  Serial.println(item); //串口显示模拟值
  if (item < 500) {//500以下  
    fill_solid(leds, NUM_LEDS, CRGB::Red);   // SK6812 RGB模块4个LED灯珠亮红灯
    FastLED.show();
    digitalWrite(buzzerPin, HIGH); //蜂鸣器鸣叫
    delay(300);
    fill_solid(leds, NUM_LEDS, CRGB::Black);   // SK6812 RGB模块4个LED灯珠不亮
    FastLED.show();
    digitalWrite(buzzerPin, LOW); //蜂鸣器不叫
    delay(300);
    digitalWrite(INA, LOW); //打开电风扇
    digitalWrite(INB, HIGH);
    
  } else {//否则，关闭风扇
    fill_solid(leds, NUM_LEDS, CRGB::Black);   // SK6812 RGB模块4个LED灯珠不亮
    FastLED.show();
    digitalWrite(buzzerPin, LOW); //蜂鸣器不叫
    digitalWrite(INA, LOW); //打开电风扇
    digitalWrite(INB, LOW);
  } 
}
