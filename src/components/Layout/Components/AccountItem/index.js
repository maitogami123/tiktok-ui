import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/205d4812d9f51f6bc23308d18580f805~c5_300x300.webp?x-expires=1659880800&x-signature=6R1B7%2FNyiT6ZWS7xliDhYTK%2BraY%3D' alt="hoa" className={cx('avatar')}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;