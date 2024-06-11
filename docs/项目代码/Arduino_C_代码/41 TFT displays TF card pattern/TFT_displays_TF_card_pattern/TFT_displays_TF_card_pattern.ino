/*  
 * 名称   : TFT_displays_TF_card_pattern
 * 功能   : TFT显示屏显示TF卡的图片
 * 作者   : http://www.keyes-robot.com/ 
*/
#include "Adafruit_GFX.h"
#include "Adafruit_ST7735.h"
#include <SD.h>
#include <SPI.h>

#if defined(__SAM3X8E__)
    #undef __FlashStringHelper::F(string_literal)
    #define F(string_literal) string_literal
#endif

// TFT显示器和TF卡将共享硬件SPI接口
//硬件SPI引脚是特定于Arduino板类型和
//不能重新映射到备用引脚。对于Arduino Uno来说，
// Duemilanove等，pin 11 = MOSI, pin 12 = MISO, pin 13 = SCK。
#define SD_CS    7  // TF卡的CS接线口
#define TFT_CS  8  // TFT 的CS接线口
#define TFT_DC   10  // TFT的DC接线口
#define TFT_RST  9  //TFT的RST接线口

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);

int Delay_Timer = 300;

void setup(void) {
  Serial.begin(9600);
  Pin_Set();
  // Initialize 1.8" TFT
  //tft.initR(INITR_BLACKTAB); 
  tft.initR();
  
  Serial.println("OK!");
  tft.fillScreen(ST7735_BLACK);
  tft.setRotation(45);
  tft.setTextSize(2);
  Serial.print("Initializing SD card...");
  if (!SD.begin(SD_CS))
  {
    Serial.println("failed!");
    tft.setTextColor(ST7735_RED);
    tft.setCursor(30, 40);
    tft.print("SD Error");
    return;
   }
   else
   {
      Serial.println("SD OK");
      tft.setTextColor(ST7735_RED);
      tft.setCursor(30, 40);
      
      tft.print("SD OK");
   }
  delay(1500);
  Voltage_Test();   //A6/A7测试5V电压
  delay(10000);
}

void loop() 
{ 
  tft.setRotation(0);
  Bmp();            //TF卡读取图片测试
  //while (1);
}

void Voltage_Test()
{
  tft.setTextSize(1);
  String A6_Value = String(analogRead(A6) *5.0 / 1023 * 2.0);
  String A7_Value = String(analogRead(A7) *5.0 / 1023 * 2.0);
  Serial.println(String("A6_Value:") + A6_Value + " V");
  Serial.println(String("A7_Value:") + A7_Value + " V");
  tft.setTextColor(ST7735_BLACK);
  tft.setCursor(10, 80);
  tft.print(String("A6_Value:") + A6_Value + " V");
  tft.setCursor(10, 100);
  tft.print(String("A7_Value:") + A7_Value + " V");
  delay(250);
  tft.setTextColor(ST7735_WHITE);
  tft.setCursor(10, 80);
  tft.print(String("A6_Value:") + A6_Value + " V");
  tft.setCursor(10, 100);
  tft.print(String("A7_Value:") + A7_Value + " V");
  delay(250);
}

void Bmp()
{
  bmpDraw("car.bmp", 0, 0);
  delay(Delay_Timer);
  bmpDraw("avatar.bmp", 0, 0);
  delay(Delay_Timer);
  bmpDraw("DEMA.bmp", 0, 0);
  delay(Delay_Timer);
  bmpDraw("DLAM.bmp", 0, 0);
  delay(Delay_Timer);
  bmpDraw("mangseng.bmp", 0, 0);
  delay(Delay_Timer);
  bmpDraw("TLP.bmp", 0, 0);
  delay(Delay_Timer);
  bmpDraw("girl.bmp", 0, 0);
  delay(Delay_Timer);
}

void Pin_Set()
{
  for(int i = 0; i < 7; i++)
  {
    pinMode(i,OUTPUT);
  }
  for(int i = 14; i < 20; i++)
  {
    pinMode(i,OUTPUT);
  }

  for(int i = 0; i < 7; i++)
  {
    digitalWrite(i,HIGH);
  }
  for(int i = 14; i < 20; i++)
  {
    digitalWrite(i,HIGH);
  }
}

//这个函数打开一个Windows位图(BMP)文件，并在给定的坐标处显示它。
//它通过一次读取多个像素值的数据(而不是逐像素)来加速。
//增加缓冲区大小会占用更多Arduino宝贵的RAM，但会使加载速度更快。
//20像素似乎是一个很好的平衡.

#define BUFFPIXEL 20

void bmpDraw(char *filename, uint8_t x, uint8_t y) {

  File     bmpFile;
  int      bmpWidth, bmpHeight;   // W+H，单位为像素
  uint8_t  bmpDepth;              // 位深度(当前必须为24)
  uint32_t bmpImageoffset;        // 开始图像数据在文件
  uint32_t rowSize;               // 可能有衬垫,Not always = bmpWidth
  uint8_t  sdbuffer[3*BUFFPIXEL]; // 像素缓冲区(每像素R+G+B)
  uint8_t  buffidx = sizeof(sdbuffer); // 在sdbuffer中的当前位置
  boolean  goodBmp = false;       // 在有效的头文件解析时设置为true
  boolean  flip    = true;        // BMP是自底向上存储的
  int      w, h, row, col;
  uint8_t  r, g, b;
  uint32_t pos = 0, startTime = millis();

  if((x >= tft.width()) || (y >= tft.height())) return;

  Serial.println();
  Serial.print("Loading image '");
  Serial.print(filename);
  Serial.println('\'');

  // 在SD卡上打开所要求的文件
  if ((bmpFile = SD.open(filename)) == NULL) {
    Serial.print("File not found");
    return;
  }

  // 解析BMP头
  if(read16(bmpFile) == 0x4D42) { // BMP签名
    Serial.print("File size: "); Serial.println(read32(bmpFile));
    (void)read32(bmpFile); //读取&忽略创建者字节
    bmpImageoffset = read32(bmpFile); // 图像数据开始
    Serial.print("Image Offset: "); Serial.println(bmpImageoffset, DEC);
    // 读取DIB Header
    Serial.print("Header size: "); Serial.println(read32(bmpFile));
    bmpWidth  = read32(bmpFile);
    bmpHeight = read32(bmpFile);
    if(read16(bmpFile) == 1) { // # planes——必须为` 1 `
      bmpDepth = read16(bmpFile); // 每像素色彩位数
      Serial.print("Bit Depth: "); Serial.println(bmpDepth);
      if((bmpDepth == 24) && (read32(bmpFile) == 0)) { // 0 = uncompressed

        goodBmp = true; //支持BMP格式——继续!
        Serial.print("Image size: ");
        Serial.print(bmpWidth);
        Serial.print('x');
        Serial.println(bmpHeight);

        //BMP行(如果需要)被填充到4字节的边界
        rowSize = (bmpWidth * 3 + 3) & ~3;

     //如果bmpHeight为负，则图像按照自上而下的顺序排列
     //这不是正例，但在实际环境中已经被观察到。
        if(bmpHeight < 0) {
          bmpHeight = -bmpHeight;
          flip      = false;
        }

        // 作物区装载
        w = bmpWidth;
        h = bmpHeight;
        if((x+w-1) >= tft.width())  w = tft.width()  - x;
        if((y+h-1) >= tft.height()) h = tft.height() - y;

        // 将TFT地址窗口设置为裁剪的图像边界
        tft.startWrite();
        tft.setAddrWindow(x, y, w, h);

        for (row=0; row<h; row++) { // 对于每个扫描线…

          //寻找扫描线的起始位置这可能看起来很辛苦
          //对每一行都这样做很密集，但这个
          //方法涵盖了很多细节，比如裁剪
          //和扫描线填充。而且，seek只占用
          //如果文件位置需要更改，则放置位置
          //(避免了SD库中大量的集群计算)
          if(flip) //位图以自底向上的顺序存储(普通BMP)
            pos = bmpImageoffset + (bmpHeight - 1 - row) * rowSize;
          else     //位图自顶向下存储
            pos = bmpImageoffset + row * rowSize;
          if(bmpFile.position() != pos) { // 需要寻找吗?
            tft.endWrite();
            bmpFile.seek(pos);
            buffidx = sizeof(sdbuffer); // 强制缓冲重新加载
          }

          for (col=0; col<w; col++) { // 对于每个像素…
            // 是时候读取更多像素数据了?
            if (buffidx >= sizeof(sdbuffer)) { // 为真
              bmpFile.read(sdbuffer, sizeof(sdbuffer));
              buffidx = 0; // 设置buffidx初始值为0
              tft.startWrite();
            }

            //将像素从BMP转换为TFT格式，推送显示
            b = sdbuffer[buffidx++];
            g = sdbuffer[buffidx++];
            r = sdbuffer[buffidx++];
            tft.pushColor(tft.color565(r,g,b));
          } //结束 pixel
        } //结束 scanline
        tft.endWrite();
        Serial.print("Loaded in ");
        Serial.print(millis() - startTime);
        Serial.println(" ms");
      } //结束goodBmp
    }
  }

  bmpFile.close();
  if(!goodBmp) Serial.println("BMP format not recognized.");
}

//它们从TF卡文件中读取16位和32位类型。
// BMP数据存储小端序，Arduino也是小端序。
//如果在其他地方移植，可能需要颠倒下标顺序。

uint16_t read16(File f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}
