<template>
    <div>
        <form action="#">
            <table>
                <tr>
                    <td>姓名：</td>
                    <td><input type="text" name="uname"/></td>
                </tr>
                <tr>
                    <td><span>*</span>邮箱：</td>
                    <td><input type="text" name="email" id="email" placeholder="请在这里输入你的电子邮件，这是非常重要的！"/></td>
                </tr>
                <tr>
                    <td>手机号：</td>
                    <td><input type="text" name="phone"/></td>
                </tr>
                <tr>
                    <td>公司：</td>
                    <td><input type="text" name="company"/></td>
                </tr>
                <tr>
                    <td>标题：</td>
                    <td><input type="text" name="title"/><br/></td>
                </tr>
                <tr>
                    <td><span>*</span>内容：</td>
                    <td><textarea name="content" id="content" placeholder="请包括尺寸、重量、目的地港口等细节，以便我们能报出最好的价格。"></textarea></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div><button id="sent">发送</button></div></td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    @media screen and (min-width:768px ){
        table{
            width: 600px;
            margin: auto;
        }
    }
    @media screen and (max-width:767px ){
        table{
            width: 100%;
        }
    }
    table tr>td:first-child{
        text-align: right;
    }
    table tr>td>input,textarea,table tr>td>div{
        margin-top: 1rem;
        width: 80%;
    }
    table tr:last-child{
        text-align: center;
    }
    textarea{
        height: 100px;
        resize: none;
    }
    table tr>td>span{
        color: red;
    }
    #sent{
        padding: 0.2rem 2rem;
        color: #fff;
        background: #ff9c00;
        border: none;
    }
</style>