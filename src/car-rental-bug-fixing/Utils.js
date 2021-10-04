export function getCarFees(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            let fee = 0;
            switch (id) {
                case 1:
                    fee = 70;
                case 2:
                    fee = 100;
                case 3:
                    fee = 130;
            }
            resolve(fee);
        }, 200)
    })
}
