<template>
  <div name="index">
    <HeaderDiv></HeaderDiv>
    <div class="navbar">
      <div class="nav">
        <div class="nav-left">
          <a><img src="../assets/images/logo.png"></a>
        </div>
        <div class="nav-right">
          <a>首页</a>
          <a>我要出借</a>
          <a>新手指导</a>
          <a>信息披露  <img src="../assets/images/arrow.png"></a>
        </div>
      </div>
    </div>

    <div class="banner">
      <img src="../assets/images/banner01.png">
    </div>

    <div class="intro">
      <ul class="introduction">
        <li>
          <img src="../assets/images/icon01.png">
          <h2>随时随地借钱</h2>
          <p>不受时间和地域的限制，随时<br/>随地可登录财商慧办理借款。</p>
        </li>
        <li>
          <img src="../assets/images/icon02.png">
          <h2>全程客服指导</h2>
          <p>7*24小时在线客服+电话客<br/>服，及时解答您的各种问题。</p>
        </li>
        <li>
          <img src="../assets/images/icon03.png">
          <h2>专业保护隐私</h2>
          <p>高级别数据安保系统，<br/>确保您的信息安全。</p>
        </li>
        <li>
          <img src="../assets/images/icon04.png">
          <h2>平稳运行10年</h2>
          <p>国内网贷企业，获得众<br/>多媒体及用户的认可。</p>
        </li>
      </ul>
    </div>

    <div class="table-box">
      <div class="checktable">
        <div>
          <span>借款金额  <img src="../assets/images/minus01.png"> </span>
          <span>年利率  <img src="../assets/images/minus02.png">  </span>
          <a><button type="submit" class="jisuan-btn">计算</button></a>
        </div>
        <table>
          <tr>
            <th>出借期限</th>
            <th>月利率</th>
            <th>月还款金额</th>
          </tr>
          <tr>
            <td>3个月</td>
            <td>0.83%</td>
            <td>￥1016.71</td>
          </tr>
          <tr>
            <td>6个月</td>
            <td>0.83%</td>
            <td>￥514.68</td>
          </tr>
          <tr>
            <td>12个月</td>
            <td>0.83%</td>
            <td>￥263.75</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="fourth-box">
      <h2>只需4步，借钱如此简单</h2>
      <img src="../assets/images/fours.png">
    </div>
    <div class="ques">
      <div class="fourth-box">
        <h2>常见问题</h2>
        <div class="question">
          <div class="question-left"><img src="../assets/images/question.png"></div>
          <div class="question-right">
            <h2>财金悦的产品计划有几种？</h2>
            <p>目前，财金悦推出的产品计划锁定时长有1、3、6、12个月定期，后期会根据实际情况推出更多期限产品供出借人选择。</p>
          </div>
        </div>
        <div class="question">
          <div class="question-left"><img src="../assets/images/question.png"></div>
          <div class="question-right">
            <h2>财金悦什么时候启动优先投标？</h2>
            <p>加入产品计划后（不需满额）即可立即启动优先匹配投标。</p>
          </div>
        </div>
        <div class="question">
          <div class="question-left"><img src="../assets/images/question.png"></div>
          <div class="question-right">
            <h2>财金悦赎回规则？</h2>
            <p>单人单日目前不受限制。D+1到达账户余额，赎回是实时到财金悦的帐户。</p>
          </div>
        </div>
        <div class="question">
          <div class="question-left"><img src="../assets/images/question.png"></div>
          <div class="question-right">
            <h2>赎回费用？</h2>
            <p>赎回目前是免费的。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottombar">
      <div>上海蜀冠投资管理有限公司 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有</div>
    </div>
  </div>
</template>
<script>
import HeaderDiv from './header'
export default {
  name: 'index',
  components: { HeaderDiv }
}
// $(function () {
//   alert('test JQuery')
// })
</script>
<style scoped>
</style>
