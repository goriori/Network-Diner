


const cookMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: "Заказы",
                callback_data: "cook_orders",
                handler: () => {
                    
                }
            },
            
        ]
    ]
}