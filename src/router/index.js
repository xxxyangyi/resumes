import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'                                    // 首页

import TemplateRouterPage from '@/components/common/template_router'          // 模板样式页
import TemplateOnePage from '@/components/common/template_one'                // 模板1
import TemplateTwoPage from '@/components/common/template_two'                //模板2
import TemplateThreePage from '@/components/common/template_three'            // 模板3
import TemplateFourPage from '@/components/common/template_four'            // 模板4
import TemplateFivePage from '@/components/common/template_five'            // 模板5
import TemplateSixPage from '@/components/common/template_six'            // 模板6
import TemplateSevenPage from '@/components/common/template_seven'            // 模板7
import TemplateEightPage from '@/components/common/template_eight'            // 模板8
import TemplateNinePage from '@/components/common/template_nine'            // 模板9

import FormMajorPage from '@/components/form_major'                           // 用户选择专业
import SamplePage from '@/components/sample'                                  // 案例页

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      // 快速了解
      path: '/form_major',
      name: 'form_major',
      component: FormMajorPage
    },
    {
      // 案例
      path: '/sample',
      name: 'sample',
      component: SamplePage
    },
    {
      // 模板
      path: '/example',
      name: 'example',
      component: TemplateRouterPage,
      redirect : '/example/exam_one',
      children : [
        {
          path: 'exam_one',
          name: 'exam_one',
          component: TemplateOnePage,
        },
        {
          path: 'exam_two',
          name: 'exam_two',
          component: TemplateTwoPage,
        },
        {
          path: 'exam_three',
          name: 'exam_three',
          component: TemplateThreePage,
        }
        ,
        {
          path: 'exam_four',
          name: 'exam_four',
          component: TemplateFourPage,
        }
        ,
        {
          path: 'exam_five',
          name: 'exam_five',
          component: TemplateFivePage,
        }
        ,
        {
          path: 'exam_six',
          name: 'exam_six',
          component: TemplateSixPage,
        }
        ,
        {
          path: 'exam_seven',
          name: 'exam_seven',
          component: TemplateSevenPage,
        },
        {
          path: 'exam_eight',
          name: 'exam_eight',
          component: TemplateEightPage,
        },
        {
          path: 'exam_nine',
          name: 'exam_nine',
          component: TemplateNinePage,
        }
      ]
    }
  ]
})
