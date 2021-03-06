//地址
export const baseUrl="https://www.chetanlian.com";

//公众号的appId
export const appId='wx98b83e8f8b25062e'

export const gameListType={
    no:0, //没有活动
    one:1, //活动一
    two:2, //活动二
 }
 
 export const wifiStatus={
     No:0, //无设备
     NoActivate:1, //有设备等待激活
     Activate_Normal:2, //已激活并正常
     Activate_Exception:3 //已激活但异常
 }

//里程表数据状态
export const theStatus={
    start:1, //开始状态--等待下次上传完成End状态
    end:2,//结束状态
    finish:3, //数据结算完成一次有效数据
    invalid:4 //无效状态 
 }
 
 //碳的类型
export const carbonSpecificType={
     unKnown:0, //未知
     awardMoney_regist:1,//奖励金--注册
     awardMoney_sign:2, //签到
     awardMoney_photograph:3, //拍照
     awardMoney_mileage:4, //里程
     awardMoney_startStop:5,//停驶
     carbonPosint_regist:21, //谈积分--注册
     carbonPosint_sign:22, //签到
     carbonPosint_photograph:23,//拍照
     carbonPosint_mileage:24,//里程
     carbonPosint_startStop:25, //停驶
     carbonRedction_regist:41, //碳减排--注册（无用）
     carbonRedction_sign:42,//签到（无用）
     carbonRedction_photograph:43,//拍照
     carbonRedction_mileage:44,//里程
     carbonRedction_startStop:45, //停驶
 }


 //api enum

//注册
const register='/api/services/app/UserService/Register'

/**
 * 发送验证码
 * @param smsType [0,1,2,3,4,5]
 * 0.注册,1.登陆,2.找回密码，3.修改密码,4.修改手机验证旧密码，5.修改手机验证新密码
 */
 const smsSend="/api/services/app/SmsService/SmsSend"

/**
 * 登陆
 * @param loginType [0,1,2]
 * 0.系统账号手机号 1.微信账号 2.支付宝账号
 * @param externalOpenId 第三方登入的 OpenId
 */
 const authenticate='/api/TokenAuth/Authenticate'

//获取动态加密的密钥
const changeSecretKey="/api/services/app/ClientService/ChangeSecretKey"

//录入车牌，更新车型数据
const updateCarBLInfoByMe='/api/services/app/CarService/UpdateCarBLInfoByMe'

//获取当前用户的登入信息
const getCurrentLoginInfo="/api/services/app/UserService/GetCurrentLoginInfo"

//上传本例图片到服务器
const uploadMileageImg='/api/FilesManage/UploadMileageImg'

//上传里程表 包含历程
const createMileage='/api/services/app/MileageService/CreateMileage'

//获取历史里程记录
const getMileageListByFilter=`/api/services/app/MileageService/GetMileageListByFilter`

//获取奖励汇总数据
const getStatistics='/api/services/app/AwardDetailService/GetStatistics'

//获取奖励画图数据
const getDrawData=`/api/services/app/AwardDetailService/GetDrawData`

//返回奖励详情数据
const getDetaildata='/api/services/app/AwardDetailService/GetDetaildata'

//获取碳积分汇总数据
const getAllWithCarbon='/api/services/app/CarbonPointDetailService/GetStatistics'

//获取碳积分画图数据
const getDrawWithCarbon='/api/services/app/CarbonPointDetailService/GetDrawData'

//获取碳积分详情数据
const getDetailwithCarBon='/api/services/app/CarbonPointDetailService/GetDetaildata'

//获取减排碳总数据getDetailWithReduction
const getAllWithReduction='/api/services/app/CarbonReductionDetailService/GetStatistics'

//减排的详细数据
const getDetailWithReduction='/api/services/app/CarbonReductionDetailService/GetDetaildata'

//获取活动二设备押金
const getGameTwoFee=`/api/services/app/GameService/GetGameTwoFee`

//参加活动二
const applyGameTwo=`/api/services/app/GameService/ApplyGameTwo`

//返回下次开始上传时间
const nextLoadPicDay=`/api/services/app/MileageService/NextLoadPicDay`

//创建公众号菜单
const createWxMenu=`/api/services/app/WXMenuCreateService/CreateWxMenu`

export const enums={
    register:register,
    smsSend:smsSend,
    authenticate:authenticate,
    changeSecretKey:changeSecretKey,
    updateCarBLInfoByMe:updateCarBLInfoByMe,
    getCurrentLoginInfo:getCurrentLoginInfo,
    createMileage:createMileage,
    uploadMileageImg:uploadMileageImg,
    getMileageListByFilter:getMileageListByFilter,
    getStatistics:getStatistics,
    getDrawData:getDrawData,
    getDetaildata:getDetaildata,
    getAllWithCarbon:getAllWithCarbon,
    getDrawWithCarbon:getDrawWithCarbon,
    getDetailwithCarBon:getDetailwithCarBon,
    getAllWithReduction:getAllWithReduction,
    getDetailWithReduction:getDetailWithReduction,
    getGameTwoFee:getGameTwoFee,
    applyGameTwo:applyGameTwo,
    nextLoadPicDay:nextLoadPicDay,
    createWxMenu:createWxMenu
}
