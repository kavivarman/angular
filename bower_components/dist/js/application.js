;'use strict';
(function (angular) {
    angular.module('MyProject', ['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('index',{
              url:'/index',
              templateUrl:'app/module/landing-page/view/landing-page.html',
              controller: 'landingpagecontroller',
              controllerAs: 'land',
              data: {
                  title: 'My Application'
              }
          })
            .state('index.apply-digest-watch', {
              url: '/$apply$digest$watch',
              templateUrl:'app/module/apply-watch-digest/view/apply.html',
              controller: 'applycontroller',
              data: {
                  title: '$apply-$digest-$watch'
              }
          })
            .state('index.directive',{
              url:'/directive',
              templateUrl:'app/module/directive/view/directive.html',
              controller:'directivecontroller'
             })
            .state('index.myApp',{
              url:'/myApp',
              templateUrl:'app/module/myApp/view/myApp.html',
              controller:'myappcontroller'
             })
            .state('index.login',{
              url:'/login',
              templateUrl:'app/module/login/view/login.html',
              controller:'formcontroller'
             })
            .state('index.example',{
              url:'/example',
              templateUrl:'app/module/Exampls/view/example.html',
              controller:'examplecontroller'
             })
            .state('index.register',{
              url:'/register',
              templateUrl:'app/module/register/view/register.html',
              controller:'registercontroller'
            });
        $urlRouterProvider.otherwise('index/login');
    }])
   .run(function ($rootScope, $state) {
       $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
           $rootScope.title = $state.current.data.title;
       });
   });
}(angular))
;
(function (angular) {     
    angular.module('MyProject')       
      .directive("falseDirective", function () {
        return {
          restrict: 'EA',
          scope: false,
          template: "<div>directive scope value : {{name}}</div>"+
          "Change directive scope value : <input type='text' ng-model='name' />"
      };
          });
     angular.module('MyProject')       
      .directive("trueDirective", function () {
        return {
          restrict: 'EA',
          scope: true,
          template: "<div>directive scope value : {{name1}}</div>"+
          "Change directive scope value : <input type='text' ng-model='name1' />"
      };
          });
     angular.module('MyProject')       
      .directive("oneWayDirective", function () {
        return {
          restrict: 'EA',
          scope: {
            name:'@'
          },
            template: "StudentName:{{name}}"+"<input type='text' ng-model='name' />"
        };
          });
      angular.module('MyProject')       
        .directive("twoWayDirective", function () {
        return {
          restrict: 'EA',
            scope: { obj: '='},
        template: '<div>Welcome, {{obj.fname + obj.lname}}!</div>'+"<input type='text' ng-model='obj.fname' />"
        };
          });
        angular.module('MyProject')       
        .directive("methodDirective", function () {
        return {
            scope: {
            stud:'=',
            obj: '=',
            swap: '&'
            },
           template: "<div>the changed names are, {{stud.fname + stud.lname}}!</div>"
           +"<button id='btn1' ng-click='swap()'>Click here to Swap student Data</button>"
        };
          });
       angular.module('MyProject') 
      .directive("phone", function () {
          return {
            scope: {
              dial: "&"
            },
            template: "<input type='text' ng-model='value'>" +
              "<button ng-click='dial({message:value})'>" +
              "Call home!</button>"
          };
        });
        /*My App*/
      angular.module('MyProject')       
      .directive("myApp", function () {
        return {
          restrict: 'EA',
          scope:{ 
             condition:'@'
            },
          template: "<div class='flexbox'>{{condition}}</div>"
      };
          });
   angular.module('MyProject')       
      .directive("address", function () {
        return {
          restrict: 'EA',
          scope:false,
          template: "<input type='text' name='address' placeHolder='Your Address'ng-model='address' ng-required class='form-control'>"
      };
          });
             
  }(angular));/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.6
 *
 */


$(document).ready(function () {


    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetsiMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    $('.close-canvas-menu').on('click', function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Run menu of canvas
    $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    $('.open-small-chat').on('click', function () {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Small todo handler
    $('.check-link').on('click', function () {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Append config box / Only for demo purpose
    // Uncomment on server mode to enable XHR calls
    //$.get("skin-config.html", function (data) {
    //    if (!$('body').hasClass('no-skin-config'))
    //        $('body').append(data);
    //});

    // Minimalize menu
    $('.navbar-minimalize').on('click', function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });

    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });


    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeigh = $('nav.navbar-default').height();
        var wrapperHeigh = $('#page-wrapper').height();

        if (navbarHeigh > wrapperHeigh) {
            $('#page-wrapper').css("min-height", navbarHeigh + "px");
        }

        if (navbarHeigh < wrapperHeigh) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeigh > wrapperHeigh) {
                $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(function () {
    if (localStorageSupport()) {

        var collapse = localStorage.getItem("collapse_menu");
        var fixedsidebar = localStorage.getItem("fixedsidebar");
        var fixednavbar = localStorage.getItem("fixednavbar");
        var boxedlayout = localStorage.getItem("boxedlayout");
        var fixedfooter = localStorage.getItem("fixedfooter");

        var body = $('body');

        if (fixedsidebar == 'on') {
            body.addClass('fixed-sidebar');
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }

        if (collapse == 'on') {
            if (body.hasClass('fixed-sidebar')) {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }
            } else {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }

            }
        }

        if (fixednavbar == 'on') {
            $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
            body.addClass('fixed-nav');
        }

        if (boxedlayout == 'on') {
            body.addClass('boxed-layout');
        }

        if (fixedfooter == 'on') {
            $(".footer").addClass('fixed');
        }
    }
});

// check if browser support HTML5 local storage
function localStorageSupport() {
    return (('localStorage' in window) && window['localStorage'] !== null)
}

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}


;;(function (angular) {
    angular.module('MyProject')
      .controller("applycontroller", ["$scope", function ($scope) {
          $scope.data = { time: new Date() };
          $scope.updateTime = function () {
              $scope.data.time = new Date();
          };
          document.getElementById("updateTimeButton")
                  .addEventListener('click', function () {
                      console.log("update time clicked");
                      $scope.data.time = new Date();
                  });
      }]);
                
}(angular))

;(function (angular) {
    angular.module('MyProject')
      .controller("contentcontroller", ["$scope","$state", function ($scope, $state) {
        $scope.data = JSON.parse(localStorage.getItem('registerDetails'));
        $state.go('index.example');
        // var value=localStorage.getItem('value');
        // if($scope.data==null)
        //     $state.go('index.register');
        // else if(value==1){
        //     $state.go('index.myApp');
        // }
        // else
        //     $state.go('index.login');
      }]);
}(angular));
(function (angular) {
    angular.module('MyProject')
      .controller("directivecontroller", ['$scope', function ($scope) {
            $scope.callHome = function (message) {
              alert(message);
            };
        $scope.name ="paper";
        $scope.name1 ="rock";
        $scope.student ="Rohit"; 
        $scope.obj = { fname: 'shubh', lname: 'raj' };   
         $scope.customer = { fname: 'shubh', lname: 'raj' }; 
        $scope.swapData = function () {
        $scope.customer = {
            fname: 'Raj',
            lname: 'kumar'
        };
    };    
}]);                
  }(angular));(function (angular) {
    angular.module('MyProject')
     .value("defaultInput", 0);
     angular.module('MyProject')
     .constant("quality", 5);

    

    angular.module('MyProject')
      .controller("examplecontroller", ["$scope","$state","defaultInput","quality", function ($scope, $state, defaultInput,quality) {
         defaultInput=10;
         $scope.number = defaultInput;
         quality="Hello World";
         $scope.fruit=quality;
      }]);
          
}(angular));(function (angular) {
    angular.module('MyProject')
      .controller("landingpagecontroller", ["$scope", function ($scope) {
          var vm=this;
      }]);
}(angular))
;(function (angular) {
    angular.module('MyProject')
      .controller("formcontroller", ["$scope","$state","defaultInput", function ($scope, $state,defaultInput) {
         console.log("welcome");
         $scope.user = JSON.parse(localStorage.getItem('registerDetails'));
         $scope.message="welcome to my app";
         $scope.number = defaultInput;
        $scope.login=function(){
          var temp =0;
          for(var i=0;i<$scope.user.length;i++){
              if($scope.user[i].email==$scope.email)
                {
                  if($scope.user[i].password==$scope.password)
                    {
                      temp =1; 
                      localStorage.setItem('index',i);
                      $state.go('index.myApp');
                     
                    }
                    else
                      {
                        temp =1;
                        alert("Your Password is incorrect");
                        $scope.password='';
                      }
                }       
          }   
              if(temp==0){
                alert("enter valid Email");
                 $scope.email='';
                 $scope.password='';
              }                       
        };
      }]);    
}(angular));(function (angular) {
    angular.module('MyProject')
      .controller("menulistcontroller", ["$scope", function ($scope) {
          console.log('menu controller');
      }]);
}(angular));
(function (angular) {
    angular.module('MyProject')
      .controller("myappcontroller", ['$scope','$state', function ($scope,$state) {
          var a=localStorage.getItem('index');
          $scope.data = JSON.parse(localStorage.getItem('registerDetails'));
          $scope.user=$scope.data[a].firstname;
          $scope.address=$scope.data[a].address;
          $scope.medicine="Medicine";
          $scope.foods="Foods";
          $scope.groceries="Groceries";
          $scope.watercans="WaterCans";
          $scope.orders=[];
          $scope.order=function(){ 
            $scope.orders.push
                        ({
                        quantity:$scope.quantity,
                        price: $scope.price,
                        address:$scope.address
                        });
                     $scope.quantity='';
                     alert("Your Order is Successful");
         };
        var b=1;
                   
         $scope.logout=function(){
           debugger; 
           b=0;
            $state.go('index.login');
            localStorage.setItem('value',b);  
         }
        localStorage.setItem('value',b);    
        
}]);     
           
  }(angular))
;
(function (angular) {
    angular.module('MyProject')
     .controller('registercontroller',['$scope','$state',
        function($scope, $state){
            $scope.message="welcome to my app";
            $scope.registerDetails=[];
            $scope.user = JSON.parse(localStorage.getItem('registerDetails'));
            if($scope.user==null){
               $scope.registerDetails=[]; 
            }
            else{
                for(var i=0;i<$scope.user.length;i++)
                {
                $scope.registerDetails.push($scope.user[i]);
                }
            }
            $scope.register=function(){
                if($scope.email!=null && $scope.email!='')
                {
                    var temp=0;
                        angular.forEach($scope.registerDetails, function(item,index){            
                        if($scope.email==item.email)
                            {              
                                    alert("Email Id Already Existed");
                                    temp=1;    
                            }   
                        })
                 if(temp==0)
                    {           
                        $scope.registerDetails.push({
                            firstname:$scope.firstname,
                            address:$scope.address,
                            email:$scope.email,
                            password:$scope.password
                        });
                        $scope.firstname='';
                        $scope.address='';
                        $scope.email='';
                        $scope.password='';    
                        $state.go('index.login');     
                        alert("register Successful");       
                    }
                     
                }
                localStorage.setItem('registerDetails', JSON.stringify($scope.registerDetails));
               
            };
            
        }]);//controller
   
}(angular))