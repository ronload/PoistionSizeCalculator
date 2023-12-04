document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.querySelector('.calculate');
    const totalFundsInput = document.getElementById('total-funds');
    const acceptLossInput = document.getElementById('accept-loss');
    const strategyLossInput = document.getElementById('strategy-loss');
    const form = document.querySelector('.form');
    const resultMessageContainer = document.querySelector('.result-message');

    calculateButton.addEventListener('click', function () {
        // 獲取用戶輸入的值
        const totalFunds = parseFloat(totalFundsInput.value);
        const acceptLoss = parseFloat(acceptLossInput.value);
        const strategyLoss = parseFloat(strategyLossInput.value);

        // 檢查是否accept_loss超過5%
        if (acceptLoss > 5) {
            const userConfirmation = confirm('警告：您的止损可能过高，有潜在的爆仓风险，仍要继续吗？');

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
        // resultMessage.className = 'result-message';
        // resultMessage.textContent = `您的可接受最大仓位为 ${maxPosition.toFixed(2)} USDT。`;
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = `您的可接受最大仓位为<br>${maxPosition.toFixed(2)} USDT。`;
        
        // 清除之前的結果
        resultMessageContainer.textContent = '';
        
        // 顯示新的結果
        resultMessageContainer.appendChild(resultMessage);
        
    });
});
