var context = new AudioContext();

function Nota(Frecuency) {
    var a = context.createOscillator();
    var gain1 = context.createGain();
    a.connect(gain1);
    a.type = "sine";
    a.frequency.value=Frecuency;
    gain1.connect(context.destination);
    a.start(0);
    gain1.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+1.5);
}


document.addEventListener("keydown", keyDown);

function keyDown (Event) {
    let keypress = Event.code;
    console.log(keypress);
    if (keypress == "KeyZ") {
        document.querySelector("#keyC4").classList.remove("key1");
        document.querySelector("#keyC4").classList.add("key1_a");
        return Nota(261.6);
    } else if (keypress == "KeyS") {
        document.querySelector("#keyC_4").classList.remove("key-black_1");
        document.querySelector("#keyC_4").classList.add("key-black_1_a");
        return Nota(277.1);
    } else if (keypress == "KeyX") {
        document.querySelector("#keyD4").classList.remove("key1");
        document.querySelector("#keyD4").classList.add("key1_a");
        return Nota(293.6);
    } else if (keypress == "KeyD") {
        document.querySelector("#keyD_4").classList.remove("key-black_2");
        document.querySelector("#keyD_4").classList.add("key-black_2_a");
        return Nota(311.1);
    } else if (keypress == "KeyC") {
        document.querySelector("#keyE4").classList.remove("key1");
        document.querySelector("#keyE4").classList.add("key1_a");
        return Nota(329.6);
    } else if (keypress == "KeyV") {
        document.querySelector("#keyF4").classList.remove("key1");
        document.querySelector("#keyF4").classList.add("key1_a");
        return Nota(349.2);
    } else if (keypress == "KeyG") {
        document.querySelector("#keyF_4").classList.remove("key-black_3");
        document.querySelector("#keyF_4").classList.add("key-black_3_a");
        return Nota(369.9);
    } else if (keypress == "KeyB") {
        document.querySelector("#keyG4").classList.remove("key1");
        document.querySelector("#keyG4").classList.add("key1_a");
        return Nota(391.9);
    } else if (keypress == "KeyH") {
        document.querySelector("#keyG_4").classList.remove("key-black_4");
        document.querySelector("#keyG_4").classList.add("key-black_4_a");
        return Nota(415.3);
    } else if (keypress == "KeyN") {
        document.querySelector("#keyA4").classList.remove("key1");
        document.querySelector("#keyA4").classList.add("key1_a");
        return Nota(440.0);
    } else if (keypress == "KeyJ") {
        document.querySelector("#keyA_4").classList.remove("key-black_5");
        document.querySelector("#keyA_4").classList.add("key-black_5_a");
        return Nota(466.1);
    } else if (keypress == "KeyM") {
        document.querySelector("#keyB4").classList.remove("key1");
        document.querySelector("#keyB4").classList.add("key1_a");
        return Nota(493.8);
    } else if (keypress == "KeyQ") {
        document.querySelector("#keyC5").classList.remove("key2");
        document.querySelector("#keyC5").classList.add("key2_a");
        return Nota(523.2);
    } else if (keypress == "Digit2") {
        document.querySelector("#keyC_5").classList.remove("key-black_6");
        document.querySelector("#keyC_5").classList.add("key-black_6_a");
        return Nota(554.3);
    } else if (keypress == "KeyW") {
        document.querySelector("#keyD5").classList.remove("key2");
        document.querySelector("#keyD5").classList.add("key2_a");
        return Nota(587.3);
    } else if (keypress == "Digit3") {
        document.querySelector("#keyD_5").classList.remove("key-black_7");
        document.querySelector("#keyD_5").classList.add("key-black_7_a");
        return Nota(622.2);
    } else if (keypress == "KeyE") {
        document.querySelector("#keyE5").classList.remove("key2");
        document.querySelector("#keyE5").classList.add("key2_a");
        return Nota(659.2);
    } else if (keypress == "KeyR") {
        document.querySelector("#keyF5").classList.remove("key2");
        document.querySelector("#keyF5").classList.add("key2_a");
        return Nota(698.4);
    } else if (keypress == "Digit5") {
        document.querySelector("#keyF_5").classList.remove("key-black_8");
        document.querySelector("#keyF_5").classList.add("key-black_8_a");
        return Nota(739.9);
    } else if (keypress == "KeyT") {
        document.querySelector("#keyG5").classList.remove("key2");
        document.querySelector("#keyG5").classList.add("key2_a");
        return Nota(783.9);
    } else if (keypress == "Digit6") {
        document.querySelector("#keyG_5").classList.remove("key-black_9");
        document.querySelector("#keyG_5").classList.add("key-black_9_a");
        return Nota(830.6);
    } else if (keypress == "KeyY") {
        document.querySelector("#keyA5").classList.remove("key2");
        document.querySelector("#keyA5").classList.add("key2_a");
        return Nota(880.0);
    } else if (keypress == "Digit7") {
        document.querySelector("#keyA_5").classList.remove("key-black_10");
        document.querySelector("#keyA_5").classList.add("key-black_10_a");
        return Nota(932.3);
    } else if (keypress == "KeyU") {
        document.querySelector("#keyB5").classList.remove("key2");
        document.querySelector("#keyB5").classList.add("key2_a");
        return Nota(987.7);
    }
}

document.addEventListener("keyup", keyUp);

function keyUp (Event) {
    let keyup = Event.code;
    console.log(keyup);
    if (keyup == "KeyZ") {
        document.querySelector("#keyC4").classList.remove("key1_a");
        document.querySelector("#keyC4").classList.add("key1");
    } else if (keyup == "KeyS") {
        document.querySelector("#keyC_4").classList.remove("key-black_1_a");
        document.querySelector("#keyC_4").classList.add("key-black_1");
    } else if (keyup == "KeyX") {
        document.querySelector("#keyD4").classList.remove("key1_a");
        document.querySelector("#keyD4").classList.add("key1");
    } else if (keyup == "KeyD") {
        document.querySelector("#keyD_4").classList.remove("key-black_2_a");
        document.querySelector("#keyD_4").classList.add("key-black_2");
    } else if (keyup == "KeyC") {
        document.querySelector("#keyE4").classList.remove("key1_a");
        document.querySelector("#keyE4").classList.add("key1");
    } else if (keyup == "KeyV") {
        document.querySelector("#keyF4").classList.remove("key1_a");
        document.querySelector("#keyF4").classList.add("key1");
    } else if (keyup == "KeyG") {
        document.querySelector("#keyF_4").classList.remove("key-black_3_a");
        document.querySelector("#keyF_4").classList.add("key-black_3");
    } else if (keyup == "KeyB") {
        document.querySelector("#keyG4").classList.remove("key1_a");
        document.querySelector("#keyG4").classList.add("key1");
    } else if (keyup == "KeyH") {
        document.querySelector("#keyG_4").classList.remove("key-black_4_a");
        document.querySelector("#keyG_4").classList.add("key-black_4");
    } else if (keyup == "KeyN") {
        document.querySelector("#keyA4").classList.remove("key1_a");
        document.querySelector("#keyA4").classList.add("key1");
    } else if (keyup == "KeyJ") {
        document.querySelector("#keyA_4").classList.remove("key-black_5_a");
        document.querySelector("#keyA_4").classList.add("key-black_5");
    } else if (keyup == "KeyM") {
        document.querySelector("#keyB4").classList.remove("key1_a");
        document.querySelector("#keyB4").classList.add("key1");
    } else if (keyup == "KeyQ") {
        document.querySelector("#keyC5").classList.remove("key2_a");
        document.querySelector("#keyC5").classList.add("key2");
    } else if (keyup == "Digit2") {
        document.querySelector("#keyC_5").classList.remove("key-black_6_a");
        document.querySelector("#keyC_5").classList.add("key-black_6");
    } else if (keyup == "KeyW") {
        document.querySelector("#keyD5").classList.remove("key2_a");
        document.querySelector("#keyD5").classList.add("key2");
    } else if (keyup == "Digit3") {
        document.querySelector("#keyD_5").classList.remove("key-black_7_a");
        document.querySelector("#keyD_5").classList.add("key-black_7");
    } else if (keyup == "KeyE") {
        document.querySelector("#keyE5").classList.remove("key2_a");
        document.querySelector("#keyE5").classList.add("key2");
    } else if (keyup == "KeyR") {
        document.querySelector("#keyF5").classList.remove("key2_a");
        document.querySelector("#keyF5").classList.add("key2");
    } else if (keyup == "Digit5") {
        document.querySelector("#keyF_5").classList.remove("key-black_8_a");
        document.querySelector("#keyF_5").classList.add("key-black_8");
    } else if (keyup == "KeyT") {
        document.querySelector("#keyG5").classList.remove("key2_a");
        document.querySelector("#keyG5").classList.add("key2");
    } else if (keyup == "Digit6") {
        document.querySelector("#keyG_5").classList.remove("key-black_9_a");
        document.querySelector("#keyG_5").classList.add("key-black_9");
    } else if (keyup == "KeyY") {
        document.querySelector("#keyA5").classList.remove("key2_a");
        document.querySelector("#keyA5").classList.add("key2");
    } else if (keyup == "Digit7") {
        document.querySelector("#keyA_5").classList.remove("key-black_10_a");
        document.querySelector("#keyA_5").classList.add("key-black_10");
    } else if (keyup == "KeyU") {
        document.querySelector("#keyB5").classList.remove("key2_a");
        document.querySelector("#keyB5").classList.add("key2");
    }
}