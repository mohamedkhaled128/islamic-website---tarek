import { getUserLocationLocalStorage, setUserLocationLocalStorage } from "../data/localStorage";

const DEFAULT_LOCATION = { latitude: "30.0444", longitude: "31.2357" }; // القاهرة

async function getDatesAndTimes(date: { day: number; month: number; year: number; }) {
    const fullDate = `${date.day}-${date.month}-${date.year}`;
    try {
        await setUserLocationLocalStorage();
    } catch {
        // استمر بموقع افتراضي إذا فشل جلب الموقع
    }
    let stored = null;
    try {
        stored = getUserLocationLocalStorage();
    } catch {
        // قيم تالفة أو غير موجودة
    }
    const location = stored && typeof stored.latitude === "string" && typeof stored.longitude === "string"
        ? stored
        : DEFAULT_LOCATION;
    const URL = `https://api.aladhan.com/v1/timings/${fullDate}?latitude=${location.latitude}&longitude=${location.longitude}&method=5`;
    return URL;
}

function getHijriMonthDays({ month, year }: { month: number; year: number; }) {
    const URL = `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`;
    return URL;
}

export {
    getDatesAndTimes,
    getHijriMonthDays
};