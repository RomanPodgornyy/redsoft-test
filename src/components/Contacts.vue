<template>
    <div class="contacts">
        <a href="tel:+74955555555" class="contacts__link contacts__link--phone">+7 (495) 555-55-55</a>
        <a href="#" class="contacts__link contacts__link--placemark">г. Москва, ул. Расплетина, 24</a>
    </div>
</template>

<style lang="scss" scoped>
.contacts {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &__link {
        margin-right: 48px;
        position: relative;
        display: block;
        color: $textColorDarken;
        font-size: $fz14;
        line-height: $lh21;
        text-decoration: none;
        &--phone {
            padding-left: 24px;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                width: 14px;
                height: 14px;
                background-image: url(~@/assets/phone-icon.svg);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 14px;
                transform: translateY(-50%);
            }
        }
        &--placemark {
            padding-left: 24px;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                width: 10px;
                height: 14px;
                background-image: url(~@/assets/placemark-icon.svg);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 10px;
                transform: translateY(-50%);
            }
        }
        &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 50%;
            width: 100%;
            height: 2px;
            background-color: $buttonColor;
            transform: translateX(-50%) scale(0);
            transition: .2s ease-in-out;
        }
        &:hover::after {
            transform: translateX(-50%) scale(1);
        }
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>