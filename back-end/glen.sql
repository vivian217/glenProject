SET NAMES UTF8;
DROP DATABASE IF EXISTS glen;
CREATE DATABASE IF NOT EXISTS glen CHARSET=UTF8;
USE glen;
#首页数据表
#轮播图
CREATE TABLE glen_index_carousel(
    id INT PRIMARY KEY AUTO_INCREMENT,
    src VARCHAR(128),
    title VARCHAR(64),
    alt VARCHAR(64)
);
INSERT INTO glen_index_carousel VALUES
(null,"img/index/banner1.jpg",null,null),
(null,"img/index/banner2.jpg",null,null),
(null,"img/index/banner3.jpg",null,null),
(null,"img/index/banner4.jpg",null,null);
#产品
CREATE TABLE glen_index_products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    details VARCHAR(128),
    img VARCHAR(128),
    alt VARCHAR(64)
);
INSERT INTO glen_index_products VALUES
(null,"碳钢预制件预加工制造生产线","固蓝法兰在100000多平方米的制造车间里进行管道制造。","img/index/products1.jpg",null),
(null,"订制不锈钢管制造和线轴","我们的工作人员对所有材料都是经验丰富的管道制造商","img/index/products2.jpg",null),
(null,"堆焊管件和焊接熔覆工艺","固蓝法兰是中国特种焊接工程公司，提供防腐焊缝覆盖层管配件","img/index/products3.jpg",null),
(null,"开模管锻件，锻压轴","材料和重量生产方法：封闭模具、挤出、开模公差（+/-）：0.3-0.5毫米（半成品）","img/index/products4.jpg",null),
(null,"特大型锚、管箍、大小头、旋转接头、方管法兰","无论何时，当您需要专门的定制法兰，高合金，低温，高强度的，都可以联系我们。","img/index/products5.jpg",null),
(null,"ASME B16.47系列法兰","自2006年以来，固蓝法兰为广泛的行业提供了最高质量的锻件法兰","img/index/products6.jpg",null),
(null,"双相钢2205/2507/31803不锈钢管配件，对焊弯头无缝或焊缝45/90/180°。短/长半径，ABS证书","无论何时，当您需要专门的定制法兰，高合金，低温，高强度的，都可以联系我们。","img/index/products7.jpg",null),
(null,"定制专业焊接非标准船舶、船舶管件","无论何时当你需要专业的定制管道配件，装配式三通，径向流三通（特殊流三通），三通，大小头等，我们都可以为您提供","img/index/products8.jpg",null);
#热门产品
CREATE TABLE glen_index_hotpro(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    img VARCHAR(128),
    alt VARCHAR(64)
);
INSERT INTO glen_index_hotpro VALUES
(null,"BS4504 10/3盲板锻造合金钢法兰，适用于造船","img/index/hot_product1.jpg",null),
(null,"ASME B16.9对焊等径三通，双相钢/不锈钢/铜镍钛合金/合金钢","img/index/hot_product2.jpg",null),
(null,"铜镍对焊弯头；Cu-Ni 90/10无缝或焊接45/90/180度；短/长半径弯头","img/index/hot_product3.jpg",null),
(null,"ANSI B16.9对焊翻边，搭接接头，适用于造船工业","img/index/hot_product4.jpg",null);
