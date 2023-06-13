const waiterMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: "Составить заказ",
                callback_data: "waiter_make_order",
                handler: () => {

                }
            },
            {
                text: "Помещение",
                callback_data: "waiter_room",
                handler: () => {

                }
            },
            {
                text: "Меню предприятия",
                callback_data: "waiter_menu",
                handler: () => {

                }
            }
        ]
    ]
}