document.addEventListener('DOMContentLoaded', function () {
    // initialize
    const form = document.querySelector('.form');
    form.classList.add('fadeIn');
    const calculateButton = document.querySelector('.calculate');
    const totalFundsInput = document.getElementById('total-funds');
    const acceptLossInput = document.getElementById('accept-loss');
    const strategyLossInput = document.getElementById('strategy-loss');
    const resultMessageContainer = document.querySelector('.result-message');

    // calculate
    calculateButton.addEventListener('click', function () {
        // value setting
        const totalFunds = parseFloat(totalFundsInput.value);
        const acceptLoss = parseFloat(acceptLossInput.value);
        const strategyLoss = parseFloat(strategyLossInput.value);

        // stop loss warning
        if (acceptLoss/totalFunds > 0.05) {
            const userConfirmation = confirm(
                '警告：您的止损可能过高，有潜在的爆仓风险，仍要继续吗？'
            );
            if (!userConfirmation) {
                totalFundsInput.value = '';
                acceptLossInput.value = '';
                strategyLossInput.value = '';
                resultMessageContainer.textContent = '';

                return;
            }
        }

        // acceptable max position
        const maxPosition = acceptLoss / (strategyLoss / 100);

        // result
        const resultMessage = document.createElement('div');
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = `您的可接受最大仓位（含杠杆）为<br>${maxPosition.toFixed(2)} USDT。`;
        resultMessage.classList.add('show');
        resultMessageContainer.innerHTML = '';
        resultMessageContainer.appendChild(resultMessage);
        resultMessageContainer.classList.add('show');
        form.style.height = 'auto';
    });
});
