// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 处理返回顶部按钮
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 示例：动态加载热门商品
    const dealsContainer = document.getElementById('deals-container');
    if (dealsContainer) {
        const featuredDeals = [
            {
                title: "Latest MacBook Air",
                price: "$999",
                description: "M2 chip, 8GB RAM, 256GB SSD",
                link: "your-affiliate-link-here",
                image: "path-to-image"
            },
            // 添加更多商品
        ];

        // 渲染热门商品
        featuredDeals.forEach(deal => {
            const dealCard = createDealCard(deal);
            dealsContainer.appendChild(dealCard);
        });
    }
});

// 创建商品卡片
function createDealCard(deal) {
    const card = document.createElement('div');
    card.className = 'deal-card';
    card.innerHTML = `
        <img src="${deal.image}" alt="${deal.title}">
        <h3>${deal.title}</h3>
        <p class="price">${deal.price}</p>
        <p>${deal.description}</p>
        <a href="${deal.link}" class="buy-button" target="_blank">
            Check on Amazon
        </a>
    `;
    return card;
}
