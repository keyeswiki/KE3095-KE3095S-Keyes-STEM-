/*
 * 名称   : Collision_alarm
 * 功能   : 碰撞传感器控制SK6812 RGB灯和蜂鸣器模拟触碰报警器
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <FastLED.h>

#define NUM_LEDS 4   //定义SK6812 RGB模块上LED灯珠数量
#define LED_PIN  3   //定义SK6812 RGB模块控制引脚为D3
CRGB leds[NUM_LEDS];

#define buzzerPin 2  //定义有源蜂鸣器引脚为D2

int Collision = A2; //定义碰撞传感器的引脚
int val = 0;

void setup() {
  Serial.begin(9600);  //波特率设置为9600
  pinMode(Collision, INPUT);   //设置碰撞传感器的引脚D3为输入模式
  pinMode(buzzerPin, OUTPUT); //将buzzerPin设置为输出模式
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);   //设置SK6812 RGB的亮度  
}

void loop() {
  val = digitalRead(Collision);  //读取碰撞传感器的值
  Serial.println(val);      //打印碰撞传感器的值
  if (val == 0) {   //碰撞时的值为0
    digitalWrite(buzzerPin, HIGH); //蜂鸣器鸣叫
    fill_solid(leds, NUM_LEDS, CRGB::Red);   // SK6812 RGB模块4个LED灯珠亮红灯
    FastLED.show();
    delay(300);
    fill_solid(leds, NUM_LEDS, CRGB::Green);   // SK6812 RGB模块4个LED灯珠亮绿色
    FastLED.show();
    delay(300);
    fill_solid(leds, NUM_LEDS, CRGB::Yellow);   // SK6812 RGB模块4个LED灯珠亮黄灯
    FastLED.show();
    delay(300);
    fill_solid(leds, NUM_LEDS, CRGB::Blue);   // SK6812 RGB模块4个LED灯珠亮蓝色
    FastLED.show();
    delay(300);
  }
  else {    //无碰撞时的值为1
    digitalWrite(buzzerPin, LOW); //蜂鸣器不叫
    fill_solid(leds, NUM_LEDS, CRGB::Black);   // SK6812 RGB模块4个LED灯珠不亮
    FastLED.show();
  }
}
