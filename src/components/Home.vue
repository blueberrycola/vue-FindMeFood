<template>
    <div class="home-container">
        <h2>Zipcode:</h2>
        <br>
        <div class="form-group">
            <input class="form-field" type="text">
        </div>
        <br>
        <div class="zip-btn">
            <button>
                <h2>Submit</h2>
            </button>
        </div>
    </div>
</template>

<style>
.zip-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.zip-btn button{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    width: 200px;
    height: 100px;
    
}
.zip-btn button:hover {
    background: lightgray;
}
.zip-btn button:active {
    background: lightgreen
}



:root {

    --input-color: #99A3BA;
    --input-border: #CDD9ED;
    --input-background: #fff;
    --input-placeholder: #CBD1DC;

    --input-border-focus: #275EFE;

    --group-color: var(--input-color);
    --group-border: var(--input-border);
    --group-background: #EEF4FF;

    --group-color-focus: #fff;
    --group-border-focus: var(--input-border-focus);
    --group-background-focus: #678EFE;

}

.form-field {
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: var(--input-color);
    border: 1px solid var(--input-border);
    background: var(--input-background);
    transition: border .3s ease;
    &::placeholder {
        color: var(--input-placeholder);
    }
    &:focus {
        outline: none;
        border-color: var(--input-border-focus);
    }
}

.form-group {
    position: relative;
    display: flex;
    width: 100%;
    & > span,
    .form-field {
        white-space: nowrap;
        display: block;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
        &:first-child {
            border-radius: 6px 0 0 6px;
        }
        &:last-child {
            border-radius: 0 6px 6px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
    }
    .form-field {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        width: 1%;
        margin-top: 0;
        margin-bottom: 0;
    }
}
.home-container {
    top: 75px;
}

</style>