export function getCarFees(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            let fee = 0;
            switch (id) {
                case 1:
                    fee = 70;
                    break;
                case 2:
                    fee = 100;
                    break;
                case 3:
                    fee = 130;
                    break;
            }
            resolve(fee);
        }, 200)
    })
}
