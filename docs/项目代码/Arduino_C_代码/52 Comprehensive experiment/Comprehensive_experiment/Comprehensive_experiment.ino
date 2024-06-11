/*
 * 名称   : Comprehensive experiment
 * 功能   : 多个传感器/模块协同工作
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <FastLED.h>
#include <Servo.h>

#define NUM_LEDS 4   //定义SK6812 RGB模块上LED灯珠数量
#define LED_PIN  A2   //定义SK6812 RGB模块控制引脚为A2
CRGB leds[NUM_LEDS];

//摇杆模块接口
int xyzPins[] = {A0, A1, 7};   //x, y, z

//旋转电位器模块引脚连接到端口A7
int resPin = A7;

//避障传感器引脚连接到IO端口D2
int Avoid = 2;

//超声波传感器的接口
int Trig = 4;
int Echo = 5;

//电容触摸传感器的端口为D3
int Touch = 3;

//创建舵机对象来控制舵机, 定义舵机引脚D6
Servo myservo;  
int servoPin = 6;  

int PushCounter = 0;//存储键被按下的次数
int yushu = 0;

bool ir_flag = 1;
float out_X, out_Y, out_Z;

void counter() {
  delay(10);
  ir_flag = 0;
  if (!digitalRead(Touch)) {
    PushCounter++;
  }
}

void setup() {
  Serial.begin(9600);//波特率设置为9600
  pinMode(xyzPins[0], INPUT); //x axis. 
  pinMode(xyzPins[1], INPUT); //y axis. 
  pinMode(xyzPins[2], INPUT_PULLUP);   //Z轴是一个按钮
  pinMode(Touch, INPUT);//电容触摸传感器
  attachInterrupt(digitalPinToInterrupt(Touch), counter, FALLING);  //外部中断0，下降沿触发
  pinMode(Avoid, INPUT);//避障传感器
  pinMode(resPin, INPUT);//旋转电位器
  pinMode(Trig, OUTPUT);//超声波传感器
  pinMode(Echo, INPUT);
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);   //设置SK6812 RGB的亮度
  myservo.attach(servoPin);  //选择舵机引脚D5
  myservo.write(0); //旋转到0度
  delay(1000);
}

void loop() {
  yushu = PushCounter % 5;
  if (yushu == 0) {  //余数为0
    rgb();  //rgb显示
} else if (yushu == 1) {  //余数是1
    Avoidance();  //避障传感器控制SK6812 RGB亮灭
} else if (yushu == 2) {  //余数是2
    Rocker();  //摇杆模块控制SK6812 RGB亮不同颜色灯
} else if (yushu == 3) {  //余数是3
    potentiometer();  //旋转电位器控制舵机慢慢转动
} else if (yushu == 4) {  //余数是4
    Ultrasonic();  //超声波传感器通过测距控制SK6812 RGB亮不同颜色灯
  } 
}

//SK6812 RGB模块上的4个LED灯珠亮不同颜色的灯
void rgb() {
  fill_solid(leds, NUM_LEDS, CRGB::Red);  //亮红色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Green);  //亮绿色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Blue);  //亮蓝色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Orange);  //亮橙色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Yellow);  //亮黄色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Purple);  //亮紫色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Gold);  //亮金色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Pink);  //亮粉红色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::Magenta);  //亮品红色灯
  FastLED.show();
  delay(100);
  fill_solid(leds, NUM_LEDS, CRGB::White);   // 亮白色灯
  FastLED.show();
  delay(100);
}

//避障传感器控制SK6812 RGB亮灭
void Avoidance() {
  int val = digitalRead(Avoid);//读取避障传感器的数字电平输出
  if (val == 0) {//障碍物检测
    fill_solid(leds, NUM_LEDS, CRGB::Red);   // 亮白色灯
    FastLED.show();
  }
  else {//未发现障碍物
    fill_solid(leds, NUM_LEDS, CRGB::Black);   // 亮白色灯
    FastLED.show();
  }
}

//摇杆模块控制SK6812 RGB亮不同颜色灯
void Rocker() {
  int xVal = analogRead(xyzPins[0]);
  int yVal = analogRead(xyzPins[1]);
  int zVal = digitalRead(xyzPins[2]);
  if (xVal >= 600  || xVal <= 400) { 
    fill_solid(leds, NUM_LEDS, CRGB::Green);  //亮绿色灯
    FastLED.show();
} else if (yVal >= 600  || yVal <= 400) {
    fill_solid(leds, NUM_LEDS, CRGB::Magenta);  //亮品红色灯
    FastLED.show();
  } 
}

//旋转电位器控制舵机慢慢转动
void potentiometer() {
  int adcVal = analogRead(resPin); 
  myservo.write((map(adcVal, 0, 1023, 0, 180)));   // 电位器的模拟值映射到舵机的位置
  delay(10);
}

//超声波传感器通过测距控制SK6812 RGB亮不同颜色灯
void Ultrasonic() {
  float distance = checkdistance();
  if (distance <= 10) {   
    fill_solid(leds, NUM_LEDS, CRGB::Red);  // SK6812 RGB模块4个LED灯珠亮红色灯
    FastLED.show();

} else if (distance > 10 && distance <= 20) {
    fill_solid(leds, NUM_LEDS, CRGB::Green);  // SK6812 RGB模块4个LED灯珠亮绿色灯
    FastLED.show();

} else {
  fill_solid(leds, NUM_LEDS, CRGB::Blue);  // SK6812 RGB模块4个LED灯珠亮蓝色灯
  FastLED.show();
  }
}

float checkdistance() {
  digitalWrite(Trig, LOW);
  delayMicroseconds(2);
  digitalWrite(Trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(Trig, LOW);
  float distance = pulseIn(Echo, HIGH) / 58.00;
  delay(10);
  return distance;
}
