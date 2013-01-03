var menu = Ti.UI.createMenu();
var fileItem = menu.addItem('File');
fileItem.addItem("Open", function () { alert('Do open');});
fileItem.addSeparatorItem();
fileItem.addItem("Exit", function () { Ti.App.exit(); });
Ti.UI.setMenu(menu);
