/*  
 * 名称   : TFT_Screen
 * 功能   : TFT屏 显示字符串，多彩图案和纯色填充屏幕
 * 作者   : http://www.keyes-robot.com/ 
*/
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

uint16_t rgb888_to_565 (uint32_t rgb888, bool reverse = false)
{
	uint8_t r = (rgb888 & 0xFF0000) >> 16;
	uint8_t g = (rgb888 & 0x00FF00) >> 8;
	uint8_t b = (rgb888 & 0x0000FF);

    if (reverse)
    {
        return ((b >> 3) << 11) |
                ((g >> 2) << 5) |
                (r >> 3);
    }
	
	return ((r >> 3) << 11) |
            ((g >> 2) << 5) |
            (b >> 3);
}

uint16_t rgb888_to_565(uint8_t r, uint8_t g, uint8_t b, bool reverse = false)
{
    if (reverse)
    {
        return ((b >> 3) << 11) |
                ((g >> 2) << 5) |
                (r >> 3);
    }

    return ((r >> 3) << 11) |
            ((g >> 2) << 5) |
            (b >> 3);
}

void setup()
{
  tft.initR(INITR_BLACKTAB); // 屏幕初始化

  tft.fillScreen(ST77XX_BLACK); // 填充黑屏
  delay(1000);

  tft.setCursor(0, 0); // 设置起始光标位置
  tft.setTextColor(rgb888_to_565(0xFF0000, true)); // 设置颜色
  tft.setTextWrap(true); // 设置自动换行
  tft.print("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur adipiscing ante sed nibh tincidunt feugiat. Maecenas enim massa, fringilla sed malesuada et, malesuada sit amet turpis. Sed porttitor neque ut ante pretium vitae malesuada nunc bibendum. Nullam aliquet ultrices massa eu hendrerit. Ut sed nisi lorem. In vestibulum purus a tortor imperdiet posuere. ");
  delay(2000);
  tft.setTextWrap(false);
}

void loop()
{
  // 自定义颜色, 纯色填充屏幕, 轮番闪烁
  tft.fillScreen(rgb888_to_565(255, 0, 255, true)); // 紫色
  delay(500);
  tft.fillScreen(rgb888_to_565(0xFFC0CB, true)); // 粉色
  delay(500);
  tft.fillScreen(rgb888_to_565(255, 0, 0, true)); // 红色
  delay(1500);

  // 字符串显示
  tft.setCursor(0, 30);
  tft.setTextSize(1);
  tft.setTextColor(rgb888_to_565(0xE3CF57, true));
  tft.println("hello world!");
  delay(500);

  tft.setTextColor(rgb888_to_565(0xFF00FF, true));
  tft.setTextSize(2);
  tft.println("hello world!");
  delay(500);

  tft.setTextColor(rgb888_to_565(0xFF8000, true));
  tft.setTextSize(3);
  tft.println("hello world!");
  delay(1500);

  // 绘制直线
  uint16_t color = rgb888_to_565(255, 0, 0, true); // 红色
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t x=0; x < tft.width(); x+=6){
    tft.drawLine(0, 0, x, tft.height()-1, color);
    delay(10);
  }
  for (int16_t y=0; y < tft.height(); y+=6){
    tft.drawLine(0, 0, tft.width()-1, y, color);
    delay(10);
  }

  color = rgb888_to_565(0, 255, 0, true); // 绿色
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t x=0; x < tft.width(); x+=6){
    tft.drawLine(tft.width()-1, 0, x, tft.height()-1, color);
    delay(10);
  }
  for (int16_t y=0; y < tft.height(); y+=6){
    tft.drawLine(tft.width()-1, 0, 0, y, color);
    delay(10);
  }

  color = rgb888_to_565(0, 0, 255, true); // 蓝色
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t x=0; x < tft.width(); x+=6){
    tft.drawLine(0, tft.height()-1, x, 0, color);
    delay(10);
  }
  for (int16_t y=0; y < tft.height(); y+=6){
    tft.drawLine(0, tft.height()-1, tft.width()-1, y, color);
    delay(10);
  }

  color = rgb888_to_565(255, 0, 255, true); // 紫色
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t x=0; x < tft.width(); x+=6){
    tft.drawLine(tft.width()-1, tft.height()-1, x, 0, color);
    delay(10);
  }
  for (int16_t y=0; y < tft.height(); y+=6){
    tft.drawLine(tft.width()-1, tft.height()-1, 0, y, color);
    delay(10);
  }

  delay(1500);

  // 水平线和垂直线
  static uint16_t color1 = rgb888_to_565(255, 0, 0, true);
  static uint16_t color2 = rgb888_to_565(0, 0, 255);
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t y=0; y < tft.height(); y+=5){
    tft.drawFastHLine(0, y, tft.width(), color1);
    delay(30);
  }
  for (int16_t x=0; x < tft.width(); x+=5){
    tft.drawFastVLine(x, 0, tft.height(), color2);
    delay(30);
  }

  delay(1500);

  // 绘制矩形
  static uint16_t color3 = rgb888_to_565(255, 0, 0, true);
  static uint16_t color4 = rgb888_to_565(0, 0, 255, true);
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t x=tft.width()-1; x > 6; x-=6){
    tft.fillRect(tft.width()/2 -x/2, tft.height()/2 -x/2 , x, x, color3); // 实心
    tft.drawRect(tft.width()/2 -x/2, tft.height()/2 -x/2 , x, x, color4); // 边框
    delay(50);
  }
  delay(1500);

  // 绘制圆形
  static uint16_t color5 = rgb888_to_565(255, 0, 0, true);
  static uint16_t color6 = rgb888_to_565(0, 0, 255, true);
  static uint8_t radius = 30;
  tft.fillScreen(ST77XX_BLACK);
  for (int16_t x=0; x < tft.width()+radius; x+=radius*2)
  {
    for (int16_t y=0; y < tft.height()+radius; y+=radius*2)
      {
        tft.fillCircle(x, y, radius, color5);
        tft.drawCircle(x, y, radius, color6);
        delay(50);
      }
  }
  delay(1500);

  // 绘制三角形
  uint16_t color7 = rgb888_to_565(0, 0, 0, true);
  tft.fillScreen(ST77XX_BLACK);
  int w = tft.width() / 2;
  int x = tft.height() - 1;
  int y = 0;
  int z = tft.width();
  for(int t = 0 ; t <= 15; t++){
    tft.drawTriangle(w, y, y, x, z, x, color7);
    x-=4;
    y+=4;
    z-=4;
    color7+=100;
    delay(100);
    }

  delay(1500);

  // 绘制圆角矩形
  uint16_t color8 = rgb888_to_565(0, 0, 0, true);
  tft.fillScreen(ST77XX_BLACK);
  for(int t = 0 ; t <= 4; t+=1){
    int x = 0;
    int y = 0;
    int w = tft.width()-2;
    int h = tft.height()-2;
    for(int i = 0 ; i <= 16; i+=1)
      {
        tft.drawRoundRect(x, y, w, h, 5, color8);
        x+=2;
        y+=3;
        w-=4;
        h-=6;
        color8+=1100;
        delay(50);
      }
    color8 += 100;
  }

  delay(1500);

  // 绘制组合图案
  tft.fillScreen(ST77XX_BLACK);
  tft.fillRoundRect(25, 10, 78, 60, 8, ST77XX_WHITE);
  tft.fillTriangle(42, 20, 42, 60, 90, 40, rgb888_to_565(0xFF0000, true));
  delay(500);

  tft.fillRoundRect(25, 90, 78, 60, 8, ST77XX_WHITE);
  tft.fillRoundRect(39, 98, 20, 45, 5, rgb888_to_565(0x00FF00, true));
  tft.fillRoundRect(69, 98, 20, 45, 5, rgb888_to_565(0x00FF00, true));
  delay(500);

  tft.fillTriangle(42, 20, 42, 60, 90, 40, rgb888_to_565(0x0000FF, true));
  delay(50);

  tft.fillRoundRect(39, 98, 20, 45, 5, rgb888_to_565(0xFF0000, true));
  tft.fillRoundRect(69, 98, 20, 45, 5, rgb888_to_565(0xFF0000, true));

  tft.fillTriangle(42, 20, 42, 60, 90, 40, rgb888_to_565(0x00FF00, true));
  delay(1500);
}