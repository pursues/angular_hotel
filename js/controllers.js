var controllerCtrl = angular.module('controllerCtrl',[]);

// module.controller(ctrlName, fn)
controllerCtrl.controller('homeCtrl',['$scope','$interval','$http',
    function($scope,$interval,$http){
        $('.highchart')
    // 调用highcharts方法绘制
        .highcharts({

            //标题
            title:{
                text:'hotel',
                style:{
                    color:'orange',
                    fontSize:'20px'
                }
            },
            // 在chart中可以定义曲线类型
            chart: {
                backgroundColor:'#fff',
                // 定义事件
                events: {
                    load: function () {
                        var series = this.series[0];
                        setInterval(function () {
                            series.addPoint(parseInt(Math.random() * 10), true, true)
                        }, 5000)
                    }
                }
            },
            // 通过series绘制一条线
            series: [
                {   
                    type: 'spline',
                    name:'room',
                    // 默认页面显示10个点（0-10随机整数）
                    data: (function () {
                        var arr = [];
                        for (var i = 0; i < 20; i++) {
                            arr.push(parseInt(Math.random() * 10))
                        }
                        // 创建10个随机数
                        return arr;
                    })()
                }
            ],
            xAis:{
                title:'time',
                style:{
                    color:'orange',
                    fontSize:'18px'
                }
            },
            //定义纵坐标
            yAxis:{
                title:{
                    text:'rooms',
                    style:{
                        color:'orange',
                        fontSize:'18px'
                    }
                }
            },
            //定义署名
            credits:{
                text:'wan yun hotel',
                href:'http://www.baidu.com',
                style:{
                    color:'orange',
                    fontSize:'16px'
                }
            }
        })
    // 轮播img 自动轮播
        //获取img下li的下标
        var index = 0;
        setInterval(function(){
            index ++;
            if(index <= 3){
                $('.automatic-dot li').eq(index).addClass('.black').siblings('.black');
                 $('.automatic-img').stop().animate({"marginLeft":-index*$(".automatic").width()});
            }else{
                index = 0;
                $('.automatic-img').css({'margin-left':0});
            }
        }, 3000)
   

    }


]);