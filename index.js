/* eslint-disable */
(async function () {
  var config = await window.XJ_INTERACTIVE_SDK.getConfigAsync();
  var env = window.XJ_INTERACTIVE_SDK.getEnv();
  // 模拟请求图片资源
  var loadResourcePromise = new Promise(function (resolve) {

    var $content = document.createElement('div');
    $content.innerHTML = `
      <div id="loading" style="background:url(${config.scenes[0].gameConfig.loadbg.value.url}) center / 100% 100%;width:100vw;height:100vh;max-height:667px;max-width:375px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
          <div id="progress" style="width:205px;padding:1px;height:13px;border:1px solid #7dacf2;border-radius: 15px;position: absolute;left: 50%;transform: translateX(-50%);bottom: 100px;">
              <div id="progress_all">
              </div>
          </div>
      </div>
    `;
    document.body.appendChild($content);
    // 模拟一个加载图片资源的loader
    var mockLoader = {
      loadCount: 0,
      doneCount: 0,
      load: function (url) {
        var self = this;
        this.loadCount++;
        var image = new Image();
        image.onload = function () {
          self.doneCount++;
          var $progress_all = document.getElementById('progress_all');
          $progress_all.style.width = `${(8+self.doneCount)*10}%`
          if (self.doneCount === self.loadCount) {
            window.XJ_INTERACTIVE_SDK.invoke('timing', window.XJ_INTERACTIVE_SDK.TIMING.LOADED);
            resolve();
          }
        };
        image.src = url;
      },
    };
    mockLoader.load(config.scenes[0].gameConfig.loadbg.value.url);
    mockLoader.load(config.scenes[1].gameConfig["41186a3e-0b2e-4e5e-9106-fffab2d67319"].value.url); // 从制作端读取配置的示例
  });


  // 模拟游戏构造方法
  function initGame() {
    var $loading = document.getElementById('loading');
    $loading.style.display = "none"
    loadResourcePromise.then(function () {
      var role_video = config.scenes[1].gameConfig["6b839c04-ce4b-45a1-9565-be257f3b36a2"].value.url
      var $rolecontent = document.createElement('div');
      var next_add = config.scenes[1].gameConfig.segment_1626294196994.value.value === "default" ? `<div id="next_add" style="background:url(${config.scenes[1].gameConfig["7daf6887-6f9e-43a5-b94a-703e162a378a"].value.url}) center no-repeat;background-size: 100%;"></div>` : `<div id="next_add"  style="color:${config.scenes[1].gameConfig["color_1626374824247"].value.value};background:${config.scenes[1].gameConfig["color_1626374649645"].value.value};font-size: 16px;line-height: 36px;text-align: center;">${config.scenes[1].gameConfig["label_1626295131590"].value.value}</div>`
      var next_battle = config.scenes[2].gameConfig.segment_1626319185211.value.value === "default" ? `<div id="next_battle" style="display:none;background:url(${config.scenes[2].gameConfig["08db9c3b-cafa-420f-b6fc-5ac74559ba5d"].value.url}) center no-repeat;background-size: 100%;"></div>` : `<div id="next_battle"  style="color:${config.scenes[2].gameConfig["color_1626375303655"].value.value};background:${config.scenes[2].gameConfig["color_1626375002943"].value.value};font-size: 16px;line-height: 36px;text-align: center;display:none;">${config.scenes[2].gameConfig["label_1626319785178"].value.value}</div>`
      var next_down = config.scenes[3].gameConfig.segment_1626378708638.value.value === "default" ? `<div id="next_down" style="display:none;background:url(${config.scenes[3].gameConfig["491b7eff-5d94-49b4-9cd7-e51a38e4d925"].value.url}) center no-repeat;background-size: 100%;"></div>` : `<div id="next_down"  style="color:${config.scenes[3].gameConfig["color_1626418955182"].value.value};background:${config.scenes[3].gameConfig["color_1626418882098"].value.value};font-size: 16px;line-height: 36px;text-align: center;display:none;">${config.scenes[3].gameConfig["label_1626378925621"].value.value}</div>`
      $rolecontent.innerHTML = `
      <div style="position: relative;">
        <video id="J_Video" src="" style="width: 100vw;" autoplay loop></video>
        <div id="role_show" style="background:url(${config.scenes[1].gameConfig["41186a3e-0b2e-4e5e-9106-fffab2d67319"].value.url}) center / 100% 100%;width:78px;height:185px;position: absolute;bottom: 103px;right: 0;">
           <div id="man" style="margin: 45px auto 10px;text-align: center;position: relative;height: 60px;width: 60px;">
            <img src="${config.scenes[1].gameConfig["98b51ed1-6475-4b85-8792-23bdca75840a"].value.url}" style="margin-top: 3px;width:55px;height:55px;" />
            <img class="gx" src="${env.publicPath}assets/xxuan.png" style="position: absolute;left: 0;top: 0;animation:role .5s infinite;width:100%" />
           </div>
           <div id="women" style="text-align: center;filter:grayscale(100%);position: relative;height: 60px;width: 60px;margin:0 auto;">
           <img style="width:55px;height:55px;margin-top: 3px;" src="${config.scenes[1].gameConfig["0c3c80a4-bfaa-446b-a29d-f73304199e70"].value.url}" />
           <img class="gx" src="${env.publicPath}assets/xxuan.png" style="position: absolute;left: 0;top: 0;animation:role .5s infinite;display:none;width:100%" />
           </div>
        </div>
        
        ${next_add}
        ${next_battle}
        ${next_down}

        </div>

        <div id="reward">
              <img src="${config.scenes[3].gameConfig["61f37227-7df5-4b29-b5b2-5c5214f98400"].value.url}" />
              <div style="width: 225px;text-align: center;font-size: 16px;margin: -155px auto 0;color:${config.scenes[3].gameConfig["color_1627025186956"].value.value}">${config.scenes[3].gameConfig["label_1627025046947"].value.value}</div>
              <div style="font-size: 16px;text-align: center;line-height: 42px;color:${config.scenes[3].gameConfig["color_1626377701879"].value.value} ;background:url(${config.scenes[3].gameConfig["41a6d21b-b64e-4985-be35-398f2f6529b4"].value.url}) center no-repeat;height:42px;background-size: 100% 100%;width: 225px;margin: 20px auto;">
              ${config.scenes[3].gameConfig["label_1626338767017"].value.value}
              </div>
        </div>
      </div>
        `;
      document.body.appendChild($rolecontent);
      fetch(role_video).then(res => {
        return res.text();
      }).then(text => {
        J_Video.src = text;
      });






      var mp3 = new Audio(`${config.scenes[1].gameConfig["284eca0b-09ce-42e4-841e-6bf58d4e2396"].value.url}`);  // 创建音频对象

      var $reward = document.getElementById('reward');
      var $next_down = document.getElementById('next_down');
      var $next_battle = document.getElementById('next_battle');
      var $J_Video = document.getElementById('J_Video');
      // J_Video.muted = true
      var $next_add = document.getElementById('next_add');
      var $role_show = document.getElementById('role_show');
      var $man = document.getElementById('man');
      var $women = document.getElementById('women');
      var next_add_type
      //角色选择
      $man.addEventListener('click', function () {
        mp3.play(); // 播放
        next_add_type = 1
        role_video = config.scenes[1].gameConfig["6b839c04-ce4b-45a1-9565-be257f3b36a2"].value.url
        $man.style.filter = 'grayscale(0%)';
        $women.style.filter = 'grayscale(100%)';
        $women.getElementsByClassName("gx")[0].style.display = "none"
        $man.getElementsByClassName('gx')[0].style.display = "block"
        fetch(role_video).then(res => {
          return res.text();
        }).then(text => {
          J_Video.src = text;
        });
      });
      $women.addEventListener('click', function () {
        mp3.play(); // 播放
        next_add_type = 2
        role_video = config.scenes[1].gameConfig["96eacc79-01e3-4406-807b-d8755c7dda44"].value.url
        $women.style.filter = 'grayscale(0%)';
        $man.getElementsByClassName("gx")[0].style.display = "none"
        $women.getElementsByClassName("gx")[0].style.display = "block"
        $man.style.filter = 'grayscale(100%)';
        fetch(role_video).then(res => {
          return res.text();
        }).then(text => {
          J_Video.src = text;
        });
      });
      //创建角色
      $next_add.addEventListener('click', function () {
        mp3.play(); // 播放
        $next_battle.style.display = "block"
        $next_add.style.display = "none"
        $role_show.style.display = "none"
        role_video = next_add_type === 1 ? config.scenes[2].gameConfig["ad54018c-c95d-4b11-b625-513be108466b"].value.url : config.scenes[2].gameConfig["9e46e6b3-0d1d-42af-874a-0f8083cbef4c"].value.url
        fetch(role_video).then(res => {
          return res.text();
        }).then(text => {
          J_Video.src = text;
        });
      })
      //加入战斗
      $next_battle.addEventListener('click', function () {
        mp3.play(); // 播放
        $next_battle.style.display = "none"
        $next_add.style.display = "none"

        $J_Video.removeAttribute("loop");
        role_video = next_add_type === 1 ? config.scenes[2].gameConfig["ad54018c-c95d-4b11-b625-513be108466b"].value.url : config.scenes[2].gameConfig["9e46e6b3-0d1d-42af-874a-0f8083cbef4c"].value.url
        fetch(role_video).then(res => {
          return res.text();
        }).then(text => {
          J_Video.src = text;
        });
        window.XJ_INTERACTIVE_SDK.invoke('timing', window.XJ_INTERACTIVE_SDK.TIMING.START);
        setTimeout(() => {
          $reward.style.transform = "scale(1) rotate(360deg)"
          $next_down.style.display = "block"
          window.XJ_INTERACTIVE_SDK.invoke('timing', window.XJ_INTERACTIVE_SDK.TIMING.END);
        }, 3000)

      })
      //点击下载
      $next_down.addEventListener('click', function () {
        mp3.play(); // 播放
        window.XJ_INTERACTIVE_SDK.transform();
        window.XJ_INTERACTIVE_SDK.invoke('timing', window.XJ_INTERACTIVE_SDK.TIMING.TRANSFORM_AFTER_END);

      })


      if (window.XJ_INTERACTIVE_SDK.getEnv().mute) {
        // 如果为true，需要强制静音。开启声音需由用户主动触发（部分流量要求）
        console.log('已静音');
      }
      // 监听显示隐藏
      window.XJ_INTERACTIVE_SDK.invoke('visibilitychange', null, function (state) {
        if (state === window.XJ_INTERACTIVE_SDK.VISIBILITY.VISIBLE) {
          J_Video.muted = false
          window.XJ_INTERACTIVE_SDK.invoke('timing', { custom: 'customVisible' }); // 非必要打点，key必须为custom，值由蹊径侧定义，具体看需求
          // 页面显示中，请处理
        } else if (state === window.XJ_INTERACTIVE_SDK.VISIBILITY.HIDDEN) {
          J_Video.muted = true
          window.XJ_INTERACTIVE_SDK.invoke('timing', { custom: 'customHidden' }); // 非必要打点，key必须为custom，值由蹊径侧定义，具体看需求
          // 页面隐藏了，请处理
        }
      });
    });
  }

  window.XJ_INTERACTIVE_SDK.invoke('onshow', null, function () {
    // 开始初始化游戏
    initGame();
  });
}());
