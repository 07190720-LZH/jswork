function sort(method){
    //待读取数据
    let origin=document.getElementById('origin').value
    let logs
    console.log(method)
    //根据传入排序的方法调用不同的排序函数
    if(method=='bubble'){
        //调用bubbleSort（）冒泡排序函数获取排序结果
        logs=bubbleSort(origin)
    }else if (method=='insert'){
        //调用insertSort()插入排序函数获取排序结果
        logs=insertSort(origin)
    }
    //获取显示冒泡程序的div
    showDiv=document.getElementById('Anim')
    //显示排序后的结果
   //生成排序日志数组的遍历器对象
   logValues=logs.values()
   //尝试看一下logValue.next()遍历器对象返回的数据结构
   console.log(logValues.next())
   //延时方式调用showlog（）函数显示排序步骤，50毫秒后调用，调用一次显示一条排序状态
   setTimeout("showLog(logValues,showDiv)",50)
}
