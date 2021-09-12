window.XJ_INTERACTIVE_MAKER_HELPER = {
  // required 实现制作端实时预览逻辑
  renderPreview(xjViewerConfig, sceneIndex, container) {
    // e.g
    const $preview = document.createElement('div');
    $preview.innerHTML = `
        <h1>预览</h1>
        <p>${xjViewerConfig.scenes[0].gameConfig.title.content}</p>
      `;
    container.appendChild($preview);
  },

  // optional 实现供制作端截图的逻辑
  getAllScreenCaptureDataURL() {
    // e.g
    const canvas = document.getElementById('J_Canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(125, 46, 138, 0.5)';
    ctx.fillRect(25, 25, 100, 100);
    ctx.fillStyle = 'rgba( 0, 146, 38, 0.5)';
    ctx.fillRect(58, 74, 125, 100);
    return [
      canvas.toDataURL(),
      canvas.toDataURL(),
    ];
  },
};
