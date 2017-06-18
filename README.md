README.md
=========

前言
----

	开始学习React的时候，在网上找了一些文章，读了官网的一些文档，后来觉得React上手还是蛮简单的，  
	然后就在网上找了一个React实战的练手项目，个人学完之后觉得这个项目很适合初学者或者进阶的朋友  
	练习，在此分享跟大家

项目介绍
----

	该项目类似与大众点评，美团等一些O2O的软件，功能相似，但由于是练手的项目，目的在于React+Redux  
	的应用，所以在一些功能上会简化，功能稍后点评，先让大家看效果


项目演示
----
![Demo](http://img.blog.csdn.net/20170611144642685?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

  [GitHub 地址][4]
  [在线演示][5]


功能介绍
----

 **1. 首页开发**[GitHub 地址][6]
	![Main Page](http://img.blog.csdn.net/20170611142406421?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **2. 城市页面**[GitHub 地址][7]
    ![City Page](http://img.blog.csdn.net/20170611143110102?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **3. 搜索结果页**[GitHub 地址][8]
	![Search Page](http://img.blog.csdn.net/20170611143309568?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **4. 详情页面**[GitHub 地址][9]
	![Detail Page](http://img.blog.csdn.net/20170611143432857?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **5. 登录页面**[GitHub 地址][10]
	![Login Page](http://img.blog.csdn.net/20170611143653860?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **6. 收藏与购买**[GitHub 地址][11]
	![Buy&&Store Page](http://img.blog.csdn.net/20170611144013838?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **7. 个人中心页面**[GitHub 地址][12]
	![User Page](http://img.blog.csdn.net/20170611143847525?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

 **8. 评价功能**[GitHub 地址][13]
	![Comment Page](http://img.blog.csdn.net/20170611144257105?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTWFnaWNfc29mdHdhcmU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


体系&技术分析
-------
	如果没有了解[React](http://reactjs.cn/)和[Redux](http://redux.js.org/)的初学者可以先去网上找一些资料  
	和博客看一下，先入门，最好是到去看官方文档。

 	- React

	框架React提供模块开发的规范，每一个组件，每一个页面当做一个模块Component,极大便捷了团队的开发，同时可以很  
	方便做到组件的分离

 	- redux是一个数据管理容器，可以很方便的实现组件之间的数据共享，由于React的数据流是单向的，不像Angular等其  
	他的双向数据流的框架，所以React会结合Flux或者Redux来开发使用。官方的概念晦涩难懂, 理解了state, store,   
	action,reducer之后再看就能理解了

    >Redux is a predictable state container for JavaScript apps.

 	- less
	 一种css的预编译语言。这个项目中的样式和布局还是div+css.

 	- 管理工具git&webpack&npm
	 git作为代码的托管工具，webpack作为开发的管理工具，npm包管理

 	- 后台模拟数据KOA

总结
----
	学完这个项目之后，相信大家会知道React+Reduce的开发的应用，和开发流程等等，同时会加深对React的理解，这也是  
	这个项目最大的好处。另一方面，React带给我们组件化的开发模式，在代码结构上非常的清晰，易于维护和扩展。相对于  
	利用Jquery开发最大的好处就是React的数据驱动视图的开发方式，在性能上也有一定的提升。

----------

	但实战项目始终是框架的运用，如果要做到代码和框架的性能优化，这个项目远远达不到效果。同时在这个项目中，我们也  
	使用了企业中常用的一些性能优化，比如使用React官方提供的库 **react-addons-pure-render-mixin** ，但对于一  
	些特定功能来讲，使用这个方法并达不到很好的效果，如果需要更加深刻的理解React的框架，除了必要的文档，其内部的  
	组织架构和实现方式也要了解，小编现在还没有深入研究，有能力的学生可以多研究一下。

说明
----

	 开发的流程也就是按照上面的顺序开发，GitHub上面有9个分支，对应每一个功能的开发，大家可以按照顺序下载代码学习  
	 方便初学者学习和使用，项目来源于Mooc网的React实战项目，在此基础上修改了一下小问题，主要代码一致。参考MOOC网  
	 [React模仿大众点评],这个上面的手记特别的详细，大家务必看一下

----------
[1]:http://reactjs.cn/
[2]:http://redux.js.org/

[4]:https://github.com/Magiccwl/dzdp-react
[5]:http://47.94.201.62:4000/
[6]:https://github.com/Magiccwl/dzdp-react/tree/main_page_dzdp
[7]:https://github.com/Magiccwl/dzdp-react/tree/city_page_dzdp
[8]:https://github.com/Magiccwl/dzdp-react/tree/search_page_dzdp
[9]:https://github.com/Magiccwl/dzdp-react/tree/detail_page_dzdp
[10]:https://github.com/Magiccwl/dzdp-react/tree/login_page_dzdp
[11]:https://github.com/Magiccwl/dzdp-react/tree/buy_store_page_dzdp
[12]:https://github.com/Magiccwl/dzdp-react/tree/user_page_dzdp
[13]:https://github.com/Magiccwl/dzdp-react/tree/comment_page_dzdp
