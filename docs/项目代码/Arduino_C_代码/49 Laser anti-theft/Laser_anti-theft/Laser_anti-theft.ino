/*
 * 名称   : Laser_anti-theft
 * 功能   : 激光防盗
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <FastLED.h>

#define NUM_LEDS 4   //定义SK6812 RGB模块上LED灯珠数量
#define LED_PIN  2   //定义SK6812 RGB模块控制引脚为D2
CRGB leds[NUM_LEDS];

#define photosensorPin  A7  //定义光敏传感器引脚为A7
#define buzzerPin A2  //定义有源蜂鸣器引脚为A2

int laserPin = 3; //定义激光引脚为D3
int item = 0; //定义变量item

void setup() {
  Serial.begin(9600);
  pinMode(photosensorPin, INPUT);  //将photosensorPin设置为输入模式
  pinMode(buzzerPin, OUTPUT); //将buzzerPin设置为输出模式
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);   //设置SK6812 RGB的亮度
  pinMode(laserPin, OUTPUT);     //将激光引脚定义为输出模式
}

void loop() {
  digitalWrite(laserPin, HIGH);     //打开激光
  item = analogRead(photosensorPin);//将光敏传感器连接到A2上，将模拟值读取到item
  Serial.println(item); //串口显示模拟值
  if (item < 800) {//800以下  
    fill_solid(leds, NUM_LEDS, CRGB::Red);   // SK6812 RGB模块4个LED灯珠亮红灯
    FastLED.show();
    digitalWrite(buzzerPin, HIGH); //蜂鸣器鸣叫
    delay(200);
    fill_solid(leds, NUM_LEDS, CRGB::Yellow);   // SK6812 RGB模块4个LED灯珠亮黄灯
    FastLED.show();
    digitalWrite(buzzerPin, LOW); //蜂鸣器不叫
    delay(200); 
  } else {//否则
    fill_solid(leds, NUM_LEDS, CRGB::Black);   // SK6812 RGB模块4个LED灯珠不亮
    FastLED.show();
    digitalWrite(buzzerPin, LOW); //蜂鸣器不叫
  } 
}