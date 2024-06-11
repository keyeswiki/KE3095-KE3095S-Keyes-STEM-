/*  
 * 名称   : Temperature-humidity meter
 * 功能   : TFT屏显示温度和湿度模拟温湿度仪表
 * 作者   : http://www.keyes-robot.com/ 
*/
#include "xht11.h"
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <SPI.h>

xht11 xht(3); //定义XHT11的引脚为D3
unsigned char dht[4] = {0, 0, 0, 0};// 只接收数据的前32位，不接收奇偶校验位

// 定义TFT屏的引脚
#define CS   8
#define RST  9
#define DC   10
#define MOSI  11
#define SCK   13

Adafruit_ST7735 tft = Adafruit_ST7735(CS, DC, RST);

void setup(){
  tft.initR(INITR_BLACKTAB); // 屏幕初始化
  tft.fillScreen(ST7735_BLACK); // 清屏 
  delay(1000);
}

//TFT屏显示温度值和湿度值
void loop(){
  tft.setTextSize(2);   //设置显示字符大小
  tft.setRotation(1);   //反转90°
  tft.setTextColor(ST7735_WHITE); //设置显示字符为白色
  tft.fillScreen(ST7735_BLACK);  // 清屏 
  if (xht.receive(dht)) { //正确检查时返回true
  }
  tft.setCursor(0, 20);  //设置显示的位置
  tft.print("Temper:");  //打印字符
  tft.setCursor(90, 20); 
  tft.print(dht[2]);
  tft.setCursor(120, 20);
  tft.print("C");
  tft.setCursor(0, 50); 
  tft.print("Humid:");
  tft.setCursor(80, 50);
  tft.print(dht[0]);
  tft.setCursor(110, 50);
  tft.print("%");
  delay(500);
}



