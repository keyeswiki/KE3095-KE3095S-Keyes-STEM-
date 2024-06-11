/*  
 * 名称   : Encoder
 * 功能   : 旋转编码器计数
 * 作者   : http://www.keyes-robot.com/ 
*/
// 旋转编码器的引脚
int CLK = 3;  //定义旋转编码器的CLK引脚为D3
int DT = A5;   //定义旋转编码器的DT引脚为A5
int SW = A4;  //定义旋转编码器的SW引脚为A4 
 
int counter = 0;  //定义变量counter
int currentStateCLK;  //定义变量currentStateCLK
int lastStateCLK;  //定义变量lastStateCLK

String currentDir ="";
unsigned long lastButtonPress = 0;

void setup() {
  Serial.begin(9600);   //设置波特率
// 将编码器引脚设置为输入
  pinMode(CLK,INPUT);
  pinMode(DT,INPUT);
  pinMode(SW,INPUT_PULLUP);
// 读取CLK的初始状态
  lastStateCLK = digitalRead(CLK);
}
 
void loop() {        
  // 读取CLK的当前状态
  currentStateCLK = digitalRead(CLK);
 
  //如果CLK的上一个状态和当前状态不同，则表示发生了脉冲
  //仅对一个状态变化做出响应，以避免重复计数
  if (currentStateCLK != lastStateCLK  && currentStateCLK == 1){
 
   //如果DT状态不同于CLK状态，则编码器将旋转CW，因此减小
    if (digitalRead(DT) != currentStateCLK) {
      counter --;
      currentDir ="CW";
    } else {
      //编码器旋转CCW所以递增
      counter ++;
      currentDir ="CCW";
    }
 
    Serial.print("Direction: ");
    Serial.print(currentDir);
    Serial.print(" | Counter: ");
    Serial.println(counter);
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
}