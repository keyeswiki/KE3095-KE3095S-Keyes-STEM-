/*  
 * 名称   : Weather broadcast
 * 功能   : TFT屏显示气压传感器检测大气压，海拔和温度模拟气象播报
 * 作者   : http://www.keyes-robot.com/ 
*/
#include "Waveshare_BMP388.h"
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <SPI.h>

// 定义TFT屏的引脚
#define CS   8
#define RST  9
#define DC   10
#define MOSI  11
#define SCK   13

Adafruit_ST7735 tft = Adafruit_ST7735(CS, DC, RST);

void setup() {  //把你的设置代码放在这里，只运行一次:
  bool bRet;
  PRESS_EN_SENSOR_TYPY enPressureType;
  pressSensorInit( &enPressureType );
  tft.initR(INITR_BLACKTAB); // 屏幕初始化
  tft.fillScreen(ST7735_BLACK); // 清屏 
}

void loop() {  // 把主代码放在这里，反复运行:
  tft.setTextSize(1.5);   //设置显示字符大小
  tft.setRotation(1);   //反转90°
  tft.setTextColor(ST7735_WHITE); //设置显示字符为白色
  tft.fillScreen(ST7735_BLACK);  // 清屏 
  int32_t s32PressureVal = 0, s32TemperatureVal = 0, s32AltitudeVal = 0;
  pressSensorDataGet(&s32TemperatureVal, &s32PressureVal, &s32AltitudeVal);
  tft.setCursor(10, 20);  //设置显示的位置
  tft.print("Pressure:");
  tft.setCursor(70, 20); 
  tft.print((float)s32PressureVal / 100);
  tft.setCursor(130, 20);
  tft.print("Pa");
  tft.setCursor(10, 50); 
  tft.print("Altitude:");
  tft.setCursor(70, 50); 
  tft.print((float)s32AltitudeVal / 100);
  tft.setCursor(120, 50);
  tft.print("m");
  tft.setCursor(10, 80);
  tft.print("Temperature:");
  tft.setCursor(90, 80); 
  tft.print((float)s32TemperatureVal / 100);
  tft.setCursor(130, 80);
  tft.print("C");
  delay(500);  
}
