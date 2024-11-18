window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/smartsoftde.com\/amrabdelrhim\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.5.3" } };
/*! This file is auto-generated */
!function (i, n) { var o, s, e; function c(e) { try { var t = { supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === r[t] }) } function u(e, t, n) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b") }return !1 } function f(e, t, n) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"), a = r.getContext("2d", { willReadFrequently: !0 }), o = (a.textBaseline = "top", a.font = "600 32px Arial", {}); return e.forEach(function (e) { o[e] = t(a, e, n) }), o } function t(e) { var t = i.createElement("script"); t.src = e, t.defer = !0, i.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = { everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) { i.addEventListener("DOMContentLoaded", e, { once: !0 }) }), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));", r = new Blob([e], { type: "text/javascript" }), a = new Worker(URL.createObjectURL(r), { name: "wpTestEmojiSupports" }); return void (a.onmessage = function (e) { c(n = e.data), a.terminate(), t(n) }) } catch (e) { } c(n = f(s, u, p)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () { n.DOMReady = !0 } }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);

function controls_data(value) {
    let currentWrapper = "mf-response-props-id-849";
    let currentEl = document.getElementById(currentWrapper);

    return currentEl ? currentEl.dataset[value] : false
}


let is_edit_mode = '' ? true : false;
let message_position = controls_data('messageposition') || 'top';


let message_successIcon = controls_data('successicon') || '';
let message_errorIcon = controls_data('erroricon') || '';
let message_editSwitch = controls_data('editswitchopen') === 'yes' ? true : false;
let message_proClass = controls_data('editswitchopen') === 'yes' ? 'mf_pro_activated' : '';

let is_dummy_markup = is_edit_mode && message_editSwitch ? true : false;


return html`
    <form
        className="metform-form-content"
        ref=${parent.formContainerRef}
        onSubmit=${validation.handleSubmit(parent.handleFormSubmit)}
    
        >


        ${is_dummy_markup ? message_position === 'top' ? props.ResponseDummyMarkup(message_successIcon, message_proClass) : '' : ''}
        ${is_dummy_markup ? ' ' : message_position === 'top' ? props.SubmitResponseMarkup`${parent}${state}${message_successIcon}${message_errorIcon}${message_proClass}` : ''}

        <!--------------------------------------------------------
        *** IMPORTANT / DANGEROUS ***
        ${html``} must be used as in immediate child of "metform-form-main-wrapper"
        class otherwise multistep form will not run at all
        ---------------------------------------------------------->

        <div className="metform-form-main-wrapper" key=${'hide-form-after-submit'} ref=${parent.formRef}>
        ${html`
                    <div data-elementor-type="wp-post" key="2" data-elementor-id="849" className="elementor elementor-849">
    <div className="elementor-element elementor-element-c860fd6 e-flex e-con-boxed e-con e-parent" data-id="c860fd6" data-element_type="container">
        <div className="e-con-inner">
    <div className="elementor-element elementor-element-da7d3b4 elementor-widget elementor-widget-mf-text" data-id="da7d3b4" data-element_type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;mf-text&quot;}" data-widget_type="mf-text.default">
    <div className="elementor-widget-container">

<div className="mf-input-wrapper">
                <label className="mf-input-label" htmlFor="mf-input-text-da7d3b4">
        ${parent.decodeEntities(`الأسم`)} 					<span className="mf-input-required-indicator">*</span>
    </label>

<input
    type="text"
    className="mf-input "
    id="mf-input-text-da7d3b4"
    name="mf-text"
    placeholder="${parent.decodeEntities(``)} "
                        onInput=${parent.handleChange}
        onBlur=${parent.handleChange}
        aria-invalid=${validation.errors['mf-text'] ? 'true' : 'false'}
        ref=${el => {
            parent.activateValidation({ "message": "\u0647\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", "minLength": 1, "maxLength": "", "type": "none", "required": true, "expression": "null" }, el)
        }}
                    />

                <${validation.ErrorMessage}
        errors=${validation.errors}
        name="mf-text"
        as=${html`<span className="mf-error-message"></span>`}
        />

        </div>

    </div>
    </div>
    <div className="elementor-element elementor-element-bf6b688 elementor-widget elementor-widget-mf-email" data-id="bf6b688" data-element_type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;mf-email&quot;}" data-widget_type="mf-email.default">
    <div className="elementor-widget-container">

<div className="mf-input-wrapper">
                <label className="mf-input-label" htmlFor="mf-input-email-bf6b688">
        ${parent.decodeEntities(`البريد الالكتروني`)} 					<span className="mf-input-required-indicator">*</span>
    </label>

<input 
    type="email" 
     
    defaultValue="" 
    className="mf-input " 
    id="mf-input-email-bf6b688" 
    name="mf-email" 
    placeholder="${parent.decodeEntities(``)} " 
     
    onBlur=${parent.handleChange} onFocus=${parent.handleChange} aria-invalid=${validation.errors['mf-email'] ? 'true' : 'false'} 
    ref=${el => parent.activateValidation({ "message": "\u0647\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", "emailMessage": "Please enter a valid Email address", "minLength": 1, "maxLength": "", "type": "none", "required": true, "expression": "null" }, el)}
                />

            <${validation.ErrorMessage} 
    errors=${validation.errors} 
    name="mf-email" 
    as=${html`<span className="mf-error-message"></span>`}
/>

        </div>

</div>
    </div>
        </div>
    </div>
<div className="elementor-element elementor-element-eef5263 e-flex e-con-boxed e-con e-parent" data-id="eef5263" data-element_type="container">
        <div className="e-con-inner">
    <div className="elementor-element elementor-element-3b62f00 elementor-widget elementor-widget-mf-telephone" data-id="3b62f00" data-element_type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;mf-telephone&quot;}" data-widget_type="mf-telephone.default">
    <div className="elementor-widget-container">

<div className="mf-input-wrapper">
                <label className="mf-input-label" htmlFor="mf-input-telephone-3b62f00">
        ${parent.decodeEntities(`رقم الهاتف`)} 					<span className="mf-input-required-indicator">*</span>
    </label>

<input
    type="tel"
    className="mf-input "
    id="mf-input-telephone-3b62f00" 
    name="mf-telephone"
    placeholder="${parent.decodeEntities(``)} "
                        onInput=${parent.handleChange}
        aria-invalid=${validation.errors['mf-telephone'] ? 'true' : 'false'}
        ref=${el => parent.activateValidation({ "message": "\u0647\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", "minLength": 1, "maxLength": "", "type": "none", "required": true, "expression": "null" }, el)}
                    />

                <${validation.ErrorMessage}
        errors=${validation.errors}
        name="mf-telephone"
        as=${html`<span className="mf-error-message"></span>`}
        />


</div>

    </div>
    </div>
        </div>
    </div>
<div className="elementor-element elementor-element-342ac59 e-flex e-con-boxed e-con e-parent" data-id="342ac59" data-element_type="container">
        <div className="e-con-inner">
    <div className="elementor-element elementor-element-a3cae0b elementor-widget elementor-widget-mf-textarea" data-id="a3cae0b" data-element_type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;mf-textarea&quot;}" data-widget_type="mf-textarea.default">
    <div className="elementor-widget-container">

<div className="mf-input-wrapper">
                <label className="mf-input-label" htmlFor="mf-input-text-area-a3cae0b">
        ${parent.decodeEntities(`الرسالة`)} 					<span className="mf-input-required-indicator">*</span>
    </label>

<textarea className="mf-input mf-textarea " id="mf-input-text-area-a3cae0b"
    name="mf-textarea" 
    placeholder="${parent.decodeEntities(``)} "
    cols="30" rows="10"
                        onInput=${parent.handleChange}
        aria-invalid=${validation.errors['mf-textarea'] ? 'true' : 'false'}
        ref=${el => parent.activateValidation({ "message": "\u0647\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628", "minLength": 1, "maxLength": "", "type": "none", "required": true, "expression": "null" }, el)}
                    ></textarea>

                <${validation.ErrorMessage}
        errors=${validation.errors}
        name="mf-textarea"
        as=${html`<span className="mf-error-message"></span>`}
        />
                    </div>

    </div>
    </div>
        </div>
    </div>
<div className="elementor-element elementor-element-26b5a6a e-flex e-con-boxed e-con e-parent" data-id="26b5a6a" data-element_type="container">
        <div className="e-con-inner">
    <div className="elementor-element elementor-element-43df06c mf-btn--justify mf-btn--tablet-justify mf-btn--mobile-justify elementor-widget elementor-widget-mf-button" data-id="43df06c" data-element_type="widget" data-widget_type="mf-button.default">
    <div className="elementor-widget-container">
        <div className="mf-btn-wraper " data-mf-form-conditional-logic-requirement="">
                <button type="submit" className="metform-btn metform-submit-btn " id="">
        <span>${parent.decodeEntities(`ارسال`)} </span>
    </button>
        </div>
    </div>
    </div>
        </div>
    </div>
    </div>
                `}
        </div>

        ${is_dummy_markup ? message_position === 'bottom' ? props.ResponseDummyMarkup(message_successIcon, message_proClass) : '' : ''}
        ${is_dummy_markup ? ' ' : message_position === 'bottom' ? props.SubmitResponseMarkup`${parent}${state}${message_successIcon}${message_errorIcon}${message_proClass}` : ''}
    
    </form>
`



const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });
    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};
const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});


/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function () { var t, e = location.hash.substring(1); /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }, !1);

var elementskit = {
    resturl: 'https://smartsoftde.com/amrabdelrhim/wp-json/elementskit/v1/',
}
var uagb_forms_data = { "ajax_url": "https:\/\/smartsoftde.com\/amrabdelrhim\/wp-admin\/admin-ajax.php", "uagb_forms_ajax_nonce": "6cf09b6173" };
var uagb_forms_data = { "ajax_url": "https:\/\/smartsoftde.com\/amrabdelrhim\/wp-admin\/admin-ajax.php", "uagb_forms_ajax_nonce": "6cf09b6173", "recaptcha_site_key_v2": "", "recaptcha_site_key_v3": "" };

var mf = { "postType": "page", "restURI": "https:\/\/smartsoftde.com\/amrabdelrhim\/wp-json\/metform\/v1\/forms\/views\/", "minMsg1": "Minimum length should be ", "Msg2": " character long.", "maxMsg1": "Maximum length should be ", "maxNum": "Maximum number should be ", "minNum": "Minimum number should be " };
var ekit_config = { "ajaxurl": "https:\/\/smartsoftde.com\/amrabdelrhim\/wp-admin\/admin-ajax.php", "nonce": "7757d2b5c3" };
