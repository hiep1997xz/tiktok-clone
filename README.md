1: Tạo dự án

2: đẩy lên git

3: cài đặt customize-cra (https://github.com/arackaf/customize-cra)
-Ghi đè các cấu hình webpack cho create-react-app 2.0 -https://www.npmjs.com/package/react-app-rewired
-tạo file config-overrides.js
-thay đổi scripts trong package.json
+( "scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-app-rewired eject"
},)

4: Cài đặt babel-plugin-module-resolver (https://github.com/tleunen/babel-plugin-module-resolver)
-tạo file .babelrc ( sử dụng để chuyển đổi cú pháp)
-tạo file jsconfig.json 5. cấu hình customize-cra -https://github.com/arackaf/customize-cra/blob/master/api.md
-useBabelRc()

6: Cài đặt và cấu hình Prettier (https://prettier.io/)
-"printWidth": 120, => chieu ngang 120 ki tu n sẽ xuosng hang
-"semi": true, => sử dụng dấu chấm phảy mỗi khi xuống dòng trong aray
-"singleQuote": true, => sử dụng nháy đơn cú pháp chuỗi
-"tabWidth": 4, => 1 tab bằng 4 dấu cách

7: tạo foder .vscode => tạo file settings.json
-mỗi khi lưu lại file thì lúc đó n sẽ sử dụng format code Prettier

8: Cấu hình sử dụng CSS/SASS
-Tạo GlobalStyles component
-Cài thư viện SASS: npm i -D sass
-Reset CSS (https://www.npmjs.com/package/normalize.css)
-Default CSS: font-family, font-size, line-height

9: Cấu hình Router/Layout cho dự án
-Phân tích tổng quan Layout: (bố cục)
-Cài đặt react-router-dom: npm i react-router-dom
-Đưa cấu hình routes ra ngoài
-Xây dựng cơ chế tải Layout

10: Dựng khung Layout mặc định
-Cài thư viện classnames: npm i classnames

11: Xây dựng UI phần Header #1
-add logo
-add input search

12: Xây dựng UI phần Header #2
-xd thu vien Tippy de hien thi ket qua search ("@tippyjs/react": "^4.2.6",)
-tao ra foder Popper (index, Wrapper, Popper.scss)
-tao ra folder AccountItem (index, AccountItem.scss)

13: Xây dựng UI phần Header #3 (common button login)
-xd button dung chung
-tao ra folder button

14: Xây dựng UI phần Header #4 (icon 3 chấm header)

15: Xây dựng UI phần Header #5 (thêm language => icon ba chấm header)

16: Xây dựng UI phần Header #6 (xây dựng trường hợp list in icon ba chấm header khi user login)

17: Xây dựng UI phần Header #7
-thay đổi font chữ
-thay header icons
-tạo component image
