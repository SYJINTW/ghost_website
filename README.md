# GHOST Website Template

Template for hackathon.

## 共用 

### Color template

#61892F  
#86C232  
#222629  
#474B4F  
#6B6E70  
#FFFFFF  
#000000  

![](https://github.com/SYJINTW/ghost_website_template/blob/master/res/color.png)

### `<head>`

```html
<title>Contact-GHoST Sharing Refregirator</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width initial-scale=1.0">
<link rel="stylesheet" href="stylecontact.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

### 檔案命名原則

ghost_website_template
-index.html  
-about.html  
-index  
/----style  
/--------style.css  
/--------header-style.css  
----js  
/--------main.js  
/--------action.js  
----img  
/--------fisrt.png  
/--------second.jpg   
-about  
/----style  
/--------style.css  
/--------header-style.css  
----js  
/--------main.js  
/--------action.js  
----img  
/--------fisrt.png  
/--------second.jpg  


## Coding Compement 

### Header and Footer

#### CSS file embed

```html
<link rel="stylesheet" href="index/style/header-footer-style.css">
```

### Header

```html
<!-- Header -->
<div class="navbar">
    <div class="logo">
        <img src="global/img/logo2-white.svg" alt="Logo">
    </div>
    <nav>
        <ul id="MenuItems">
            <li><a class="active" href="home">HOME</a></li>
            <li><a href="events.html">EVENTS</a></li>
            <li><a href="service.html">SERVICE</a></li>
            <li><a href="contact.html">CONTACT</a></li>
            <li><a href="about.html">ABOUT US</a></li>
            <li><a class="action" href="action.html">TAKE ACTION</a></li>
        </ul>
    </nav>
    <div class="login">
        <img src="global/img/login-icon-white.svg" alt="Login">
    </div>
    
</div>
```

### Footer

```html
<!-- Footer -->
<footer>
    <div class="logo">
        <img src="global/img/logo2-white.svg" alt="Logo">
    </div>
    <p>Copyright © 2021 GHoST</p>
    
</footer>
```

### Button

#### Solid Button

HTML Part

```html
<!-- button -->
<a class="btn" href="#">Context</a>
```

CSS part

```css
.btn{
    display: inline-block;
    background-color:#86C232;
    color:#fff; 
    border-radius: 50px;
    font-size:28px;
    text-decoration: none;
    width: 362px;
    height: 76px;
    text-align: center;
    line-height: 76px;
    letter-spacing: 5px;
}
.btn:hover{
    background-color:#61892F;
}
```

#### Hollow Button

HTML Part
```html
<a class="hollow-btn" href="findus">FIND US</a>
```

CSS Part
```css
.hollow-btn {
    display: inline-block;
    color: #86C232;
    border-radius: 50px;
    font-size: 28px;
    text-decoration: none;
    width: 362px;
    height: 76px;
    text-align: center;
    line-height: 70px;
    letter-spacing: 5px;
    border: 5px solid #86C232;
}

.hollow-btn:hover {
    background-color: #86C232;
    color: #fff;
}
```

#### Small Solid Button

HTML Part
```html
<a class="small-btn" href="#">Context</a>
```

CSS Part
```css
.small-btn {
    display: inline-block;
    width: 220px;
    height: 76px;
    font-size: 24px;
    background-color: #86C232;
    color: #fff;
    border-radius: 50px;
    letter-spacing: 3px;
    text-decoration: none;
    line-height: 76px;
    margin: 40px 0;
}

.small-btn:hover {
    background-color: #61892F;
}
```





## Authors

- [@SYJINTW](https://github.com/SYJINTW)
- [@Chang-Chi Wu](https://github.com/ChangChiTW)
- [@kkai108](https://github.com/kkai108)
- [@yunping0111](https://www.github.com/yunping0111)

  


