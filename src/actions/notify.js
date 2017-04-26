export default (text) => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    let notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: text,
    });
    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037");
    };
  }

}
