document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    form.classList.add('fadeIn'); // 添加了 'fadeIn' 類別
    const calculateButton = document.querySelector('.calculate');
    const totalFundsInput = document.getElementById('total-funds');
    const acceptLossInput = document.getElementById('accept-loss');
    const strategyLossInput = document.getElementById('strategy-loss');
    const resultMessageContainer = document.querySelector('.result-message');

    calculateButton.addEventListener('click', function () {
        // 獲取用戶輸入的值
        const totalFunds = parseFloat(totalFundsInput.value);
        const acceptLoss = parseFloat(acceptLossInput.value);
        const strategyLoss = parseFloat(strategyLossInput.value);

        // 檢查是否accept_loss超過5%
        if (acceptLoss > 5) {
            const userConfirmation = confirm('警告：您的止損可能過高，有潛在的爆倉風險，仍要繼續嗎？');

            if (!userConfirmation) {
                // 用戶選擇取消，清除輸入
                totalFundsInput.value = '';
                acceptLossInput.value = '';
                strategyLossInput.value = '';

                // 清除之前的結果
                resultMessageContainer.textContent = '';

                return;
            }
        }

        // 計算最大倉位
        const maxPosition = (totalFunds * acceptLoss / 100) / (strategyLoss / 100);

        // 創建新的結果元素
        const resultMessage = document.createElement('div');
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = `您的可接受最大仓位（含杠杆）为<br>${maxPosition.toFixed(2)} USDT。`;

        // 添加 show 類以啟動過渡效果
        resultMessage.classList.add('show');

        // 清除之前的結果
        resultMessageContainer.innerHTML = '';

        // 顯示新的結果
        resultMessageContainer.appendChild(resultMessage);

        // 添加 show 類以啟動過渡效果
        resultMessageContainer.classList.add('show');

        // 設置 form 的高度為 auto
        form.style.height = 'auto';
    });
});
