// --- 1. OUR TRANSLATION DICTIONARY (FINAL VERSION) ---
const translations = {
    "en": {
        // Nav
        "nav_logout": "Logout",
        "login_welcome": "Welcome, Farmer. Please log in.",
        "login_btn": "Login",
        "nav_home": "Home",
        "nav_scan": "Leaf Scan",
        "nav_field_scan": "Field Scan",
        "nav_about": "About",
        "nav_project": "Project Details",
        // Home
        "hero_title": "The AI Plant Doctor in Your Pocket",
        "hero_subtitle": "Instantly diagnosing crop health, powered by the Kaggle PlantVillage dataset.",
        "hero_cta": "Start Your First Scan",
        // Alerts
        "alert_title": "Proactive Alerts",
        "alert_1_title": "FUNGAL ALERT",
        "alert_1_body": "High humidity in your area increases risk for Late Blight.",
        "alert_2_title": "VIRUS ALERT",
        "alert_2_body": "Whitefly populations detected nearby. Monitor tomatoes for Yellow Leaf Curl Virus.",
        // Leaf Scan
        "scan_title": "AI Diagnostic Scan (Model A)",
        "scan_prompt": "Please upload a single leaf image for analysis.",
        "scan_insights_title": "Actionable Insights:",
        "btn_buy_medicine": "Find Local Suppliers",
        "btn_consult_expert": "Consult an Expert",
        "btn_report_pest": "Report Pest for Expert Review",
        "report_success": "Thank you! Your image has been submitted to our experts for analysis.",
        // Field Scan
        "field_scan_title": "Field Health Analysis (Model B)",
        "field_scan_subtitle": "Upload a wide-angle photo of your crop rows to detect nutrient deficiencies.",
        "diag_nitrogen": "Nitrogen Deficiency Detected",
        "insight_nitrogen_1": "<strong>Analysis:</strong> Our U-Net segmentation model detected patterns consistent with Nitrogen (N) stress in the lower, older leaves.",
        "insight_nitrogen_2": "<strong>Recommendation:</strong> Apply a high-nitrogen liquid fertilizer or side-dress with a granular nitrogen source.",
        // Weather
        "weather_title": "Local Weather Conditions",
        "weather_temp": "Temperature",
        "weather_humidity": "Humidity",
        "insight_weather_fungal": "<strong>Weather Alert:</strong> High humidity (above 80%) significantly increases the risk of fungal spread. Act quickly.",
        "insight_weather_viral": "<strong>Weather Alert:</strong> Warm temperatures (above 25°C) are ideal for insects like Whiteflies that spread this virus.",
        // About
        "about_title": "About Agri-Scan",
        "about_p1": "This project is an AI-powered diagnostic tool designed to help farmers instantly identify crop diseases and get actionable insights.",
        "about_h_features": "Core Features:",
        "about_f1": "<strong>Instant AI Diagnosis:</strong> Our core engine is trained on the Kaggle PlantVillage dataset to identify multiple diseases across several crops.",
        "about_f2": "<strong>Actionable Insights:</strong> We don't just give a label; we provide immediate, expert-level recommendations for treatment and prevention.",
        "about_f3": "<strong>\"Flaw-Proof\" Safety:</strong> Our model includes a 90% confidence threshold to prevent \"wrong answers.\"",
        // Project
        "project_title": "Project Details",
        "project_h_ai": "Our Multi-Layered AI Engine",
        "project_p_ai": "Our \"brain\" uses a multi-layered approach for high accuracy. We use a <strong>MobileNetV2</strong> model for rapid disease classification and a <strong>U-Net</strong> model for pixel-level stress detection, which is key for finding nutrient issues.",
        "project_h_tech": "Production Tech Stack",
        "project_p_tech": "This prototype is built in HTML/JS, but our full production build is planned with a scalable, professional stack:",
        "project_t1": "<strong>Frontend:</strong> React Native (for one iOS/Android codebase).",
        "project_t2": "<strong>Backend:</strong> Python (FastAPI) to serve the AI models with low latency.",
        "project_t3": "<strong>Database:</strong> Firebase for user profiles, scan history, and model logging.",
        "project_h_scope": "Future Scope (Phase 2 & 3)",
        "project_s1": "<strong>Drone Integration:</strong> Using our AI engine to analyze large-scale drone and satellite imagery for automated field mapping.",
        "project_s2": "<strong>National Outbreak Tracking:</strong> Building a real-time, national map to predict and track disease outbreaks, providing early warnings to all users.",
        "project_s3": "<strong>Supplier Partnerships:</strong> Integrating our \"Find Suppliers\" feature directly with local agricultural suppliers for a seamless solution.",

        // --- Generic Insights ---
        "diag_unknown": "Unknown Crop or Issue",
        "insight_unknown_1": "This image does not match our database with high confidence.",
        "insight_unknown_2": "This has been flagged for manual review by our agricultural experts.",
        "diag_default": "Diagnosis",
        "insight_no_data": "No insights available for this diagnosis yet.",
        "insight_healthy": "No disease detected. Continue standard monitoring.",
        
        // --- ALL 9 CROP DIAGNOSES (EN) ---
        "diag_tomato_bacterial_spot": "Tomato - Bacterial Spot",
        "diag_tomato_early_blight": "Tomato - Early Blight",
        "diag_tomato_late_blight": "Tomato - Late Blight",
        "diag_tomato_leaf_mold": "Tomato - Leaf Mold",
        "diag_tomato_septoria": "Tomato - Septoria Leaf Spot",
        "diag_tomato_spider_mites": "Tomato - Spider Mites",
        "diag_tomato_target_spot": "Tomato - Target Spot",
        "diag_tomato_yellow_virus": "Tomato - Yellow Leaf Curl Virus",
        "diag_tomato_mosaic_virus": "Tomato - Mosaic Virus",
        "diag_tomato_healthy": "Tomato - Healthy",
        "diag_potato_early_blight": "Potato - Early Blight",
        "diag_potato_late_blight": "Potato - Late Blight",
        "diag_potato_healthy": "Potato - Healthy",
        "diag_corn_gray_spot": "Corn - Gray Leaf Spot",
        "diag_corn_common_rust": "Corn - Common Rust",
        "diag_corn_northern_blight": "Corn - Northern Leaf Blight",
        "diag_corn_healthy": "Corn - Healthy",
        "diag_strawberry_leaf_scorch": "Strawberry - Leaf Scorch",
        "diag_strawberry_healthy": "Strawberry - Healthy",
        "diag_apple_scab": "Apple - Apple Scab",
        "diag_apple_black_rot": "Apple - Black Rot",
        "diag_apple_cedar_rust": "Apple - Cedar Apple Rust",
        "diag_apple_healthy": "Apple - Healthy",
        "diag_pepper_bacterial_spot": "Bell Pepper - Bacterial Spot",
        "diag_pepper_healthy": "Bell Pepper - Healthy",
        "diag_cherry_powdery_mildew": "Cherry - Powdery Mildew",
        "diag_cherry_healthy": "Cherry - Healthy",
        "diag_grape_black_rot": "Grape - Black Rot",
        "diag_grape_esca": "Grape - Esca (Black Measles)",
        "diag_grape_leaf_blight": "Grape - Leaf Blight",
        "diag_grape_healthy": "Grape - Healthy",
        "diag_peach_bacterial_spot": "Peach - Bacterial Spot",
        "diag_peach_healthy": "Peach - Healthy",

        // --- ALL UNIVERSAL INSIGHTS (EN) ---
        "insight_copper_spray": "<strong>Treatment:</strong> Apply a copper-based bactericide spray.",
        "insight_avoid_overhead_water": "<strong>Prevention:</strong> Avoid overhead watering; water at the base.",
        "insight_remove_lower_leaves": "<strong>Immediate:</strong> Remove and destroy infected lower leaves.",
        "insight_fungicide_chlorothalonil": "<strong>Treatment:</strong> Apply a fungicide containing chlorothalonil or mancozeb.",
        "insight_remove_leaves": "<strong>Immediate:</strong> Remove and destroy all infected leaves.",
        "insight_copper_fungicide": "<strong>Treatment:</strong> Apply a copper-based fungicide.",
        "insight_improve_airflow": "<strong>Prevention:</strong> Prune plants to improve air circulation.",
        "insight_miticide_spray": "<strong>Treatment:</strong> Apply a miticide or insecticidal soap.",
        "insight_increase_humidity": "<strong>Prevention:</strong> Mites hate humidity; mist plants if indoors.",
        "insight_remove_infected_plants": "<strong>Immediate:</strong> Remove and destroy the entire plant. This is a virus and cannot be cured.",
        "insight_control_whiteflies": "<strong>Prevention:</strong> Control the whitefly population, as they spread the virus.",
        "insight_control_insects": "<strong>Prevention:</strong> Control aphids and thrips that spread the virus.",
        "insight_crop_rotation": "<strong>Prevention:</strong> Practice crop rotation; do not plant in the same spot next year.",
        "insight_destroy_plants": "<strong>Immediate:</strong> Destroy infected plants and tubers to prevent spread.",
        "insight_targeted_fungicide": "<strong>Treatment:</strong> Apply a targeted fungicide (e.g., containing mancozeb).",
        "insight_resistant_varieties": "<strong>Prevention:</strong> Plant resistant varieties if this disease is common in your area.",
        "insight_fungicide_if_severe": "<strong>Treatment:</strong> Apply a fungicide only if the infection is severe and early.",
        "insight_remove_infected_leaves": "<strong>Immediate:</strong> Remove and burn infected leaves to reduce spores.",
        "insight_fungicide_captan": "<strong>Treatment:</strong> Apply a fungicide (e.g., Captan or myclobutanil).",
        "insight_remove_fallen_leaves": "<strong>Prevention:</strong> Clean up and destroy all fallen leaves in the autumn.",
        "insight_prune_dead_wood": "<strong>Immediate:</strong> Prune out any dead or cankered branches.",
        "insight_fungicide_myclobutanil": "<strong>Treatment:</strong> Apply a fungicide like myclobutanil.",
        "insight_remove_juniper": "<strong>Prevention:</strong> Remove nearby juniper trees, which host the rust.",
        "insight_fungicide_sulfur": "<strong>Treatment:</strong> Apply a sulfur-based fungicide.",
        "insight_remove_mummies": "<strong>Prevention:</strong> Remove and destroy all shriveled 'mummified' grapes from the vine.",
        "insight_no_chemical_cure": "<strong>Treatment:</strong> There is no chemical cure. Prune heavily in late winter to remove infected wood.",
        "insight_prune_peach": "<strong>Prevention:</strong> Prune trees in late spring to promote healing and airflow.",
    },
    "hi": {
        // Nav
        "nav_logout": "लॉग आउट",
        "login_welcome": "नमस्ते किसान। कृपया लॉग इन करें।",
        "login_btn": "लॉग इन करें",
        "nav_home": "होम",
        "nav_scan": "पत्ती स्कैन",
        "nav_field_scan": "फील्ड स्कैन",
        "nav_about": "हमारे बारे में",
        "nav_project": "परियोजना विवरण",
        // Home
        "hero_title": "एआई प्लांट डॉक्टर, आपकी जेब में",
        "hero_subtitle": "कैगल प्लांटविलेज डेटासेट द्वारा संचालित, फसल स्वास्थ्य का तुरंत निदान।",
        "hero_cta": "अपना पहला स्कैन शुरू करें",
        // Alerts
        "alert_title": "सक्रिय अलर्ट",
        "alert_1_title": "फंगल अलर्ट",
        "alert_1_body": "आपके क्षेत्र में उच्च आर्द्रता पछेती झुलसा का खतरा बढ़ाती है।",
        "alert_2_title": "वायरस अलर्ट",
        "alert_2_body": "आस-पास सफेद मक्खी की आबादी का पता चला है। येलो लीफ कर्ल वायरस के लिए टमाटर की निगरानी करें।",
        // Leaf Scan
        "scan_title": "एआई डायग्नोस्टिक स्कैन (मॉडल ए)",
        "scan_prompt": "कृपया विश्लेषण के लिए एक पत्ती की छवि अपलोड करें।",
        "scan_insights_title": "कार्रवाई योग्य अंतर्दृष्टि:",
        "btn_buy_medicine": "स्थानीय आपूर्तिकर्ताओं को ढूंढें",
        "btn_consult_expert": "विशेषज्ञ से सलाह लें",
        "btn_report_pest": "विशेषज्ञ समीक्षा के लिए कीट की रिपोर्ट करें",
        "report_success": "धन्यवाद! आपकी छवि हमारे विशेषज्ञों को विश्लेषण के लिए भेज दी गई है।",
        // Field Scan
        "field_scan_title": "फील्ड स्वास्थ्य विश्लेषण (मॉडल बी)",
        "field_scan_subtitle": "पोषक तत्वों की कमी का पता लगाने के लिए अपनी फसल की पंक्तियों का एक चौड़ा-कोण वाला फोटो अपलोड करें।",
        "diag_nitrogen": "नाइट्रोजन की कमी का पता चला",
        "insight_nitrogen_1": "<strong>विश्लेषण:</strong> हमारे यू-नेट सेगमेंटेशन मॉडल ने निचली, पुरानी पत्तियों में नाइट्रोजन (एन) तनाव के अनुरूप पैटर्न का पता लगाया है।",
        "insight_nitrogen_2": "<strong>सिफारिश:</strong> उच्च-नाइट्रोजन तरल उर्वरक लागू करें या दानेदार नाइट्रोजन स्रोत के साथ साइड-ड्रेस करें।",
        // Weather
        "weather_title": "स्थानीय मौसम की स्थिति",
        "weather_temp": "तापमान",
        "weather_humidity": "नमी",
        "insight_weather_fungal": "<strong>मौसम अलर्ट:</strong> उच्च आर्द्रता (80% से अधिक) फंगल फैलने का खतरा काफी बढ़ा देती है। शीघ्र कार्रवाई करें।",
        "insight_weather_viral": "<strong>मौसम अलर्ट:</strong> गर्म तापमान (25°C से अधिक) सफेद मक्खी जैसे कीड़ों के लिए आदर्श है जो इस वायरस को फैलाते हैं।",
        // About
        "about_title": "एग्री-स्कैन के बारे में",
        "about_p1": "यह परियोजना किसानों को फसल रोगों की तुरंत पहचान करने और कार्रवाई योग्य अंतर्दृष्टि प्राप्त करने में मदद करने के लिए डिज़ाइन किया गया एक एआई-संचालित उपकरण है।",
        "about_h_features": "मुख्य विशेषताएँ:",
        "about_f1": "<strong>त्वरित एआई निदान:</strong> हमारा मुख्य इंजन कई फसलों में कई बीमारियों की पहचान करने के लिए कैगल प्लांटविलेज डेटासेट पर प्रशिक्षित है।",
        "about_f2": "<strong>कार्रवाई योग्य अंतर्दृष्टि:</strong> हम सिर्फ एक लेबल नहीं देते; हम उपचार और रोकथाम के लिए तत्काल, विशेषज्ञ-स्तर की सिफारिशें प्रदान करते।",
        "about_f3": "<strong>\"त्रुटि-रहित\" सुरक्षा:</strong> हमारे मॉडल में \"गलत उत्तरों\" को रोकने के लिए 90% आत्मविश्वास थ्रेशोल्ड शामिल है।",
        // Project
        "project_title": "परियोजना विवरण",
        "project_h_ai": "हमारा बहु-स्तरीय एआई इंजन",
        "project_p_ai": "हमारा \"ब्रेन\" उच्च सटीकता के लिए बहु-स्तरीय दृष्टिकोण का उपयोग करता है। हम तेजी से रोग वर्गीकरण के लिए <strong>MobileNetV2</strong> मॉडल और पिक्सेल-स्तरीय तनाव का पता लगाने के लिए <strong>U-Net</strong> मॉडल का उपयोग करते हैं, जो पोषक तत्वों के मुद्दों को खोजने के लिए महत्वपूर्ण है।",
        "project_h_tech": "प्रोडक्शन टेक स्टैक",
        "project_p_tech": "यह प्रोटोटाइप HTML/JS में बनाया गया है, लेकिन हमारा पूर्ण प्रोडक्शन बिल्ड एक स्केलेबल, पेशेवर स्टैक के साथ योजनाबद्ध है:",
        "project_t1": "<strong>फ्रंटएंड:</strong> रिएक्ट नेटिव (एक iOS/एंड्रॉइड कोडबेस के लिए)।",
        "project_t2": "<strong>बैकएंड:</strong> पायथन (FastAPI) एआई मॉडल को कम विलंबता के साथ परोसने के लिए।",
        "project_t3": "<strong>डेटाबेस:</strong> फायरबेस उपयोगकर्ता प्रोफाइल, स्कैन इतिहास और मॉडल लॉगिंग के लिए।",
        "project_h_scope": "भविष्य की संभावनाएं (चरण 2 और 3)",
        "project_s1": "<strong>ड्रोन एकीकरण:</strong> स्वचालित फ़ील्ड मैपिंग के लिए बड़े पैमाने पर ड्रोन और सैटेलाइट इमेजरी का विश्लेषण करने के लिए हमारे एआई इंजन का उपयोग करना।",
        "project_s2": "<strong>राष्ट्रीय प्रकोप ट्रैकिंग:</strong> सभी उपयोगकर्ताओं को प्रारंभिक चेतावनी प्रदान करते हुए, रोग के प्रकोपों की भविष्यवाणी और ट्रैक करने के लिए एक रीयल-टाइम, राष्ट्रीय मानचित्र बनाना।",
        "project_s3": "<strong>आपूर्तिकर्ता भागीदारी:</strong> एक सहज समाधान के लिए हमारी \"आपूर्तिकर्ता खोजें\" सुविधा को सीधे स्थानीय कृषि आपूर्तिकर्ताओं के साथ एकीकृत करना।",
        
        // --- Generic Insights (HI) ---
        "diag_unknown": "अज्ञात फसल या समस्या",
        "insight_unknown_1": "यह छवि हमारे डेटाबेस से उच्च आत्मविश्वास के साथ मेल नहीं खाती।",
        "insight_unknown_2": "इसे हमारे कृषि विशेषज्ञों द्वारा मैन्युअल समीक्षा के लिए ध्वजांकित किया गया है।",
        "diag_default": "निदान",
        "insight_no_data": "इस निदान के लिए अभी तक कोई अंतर्दृष्टि उपलब्ध नहीं है।",
        "insight_healthy": "कोई रोग नहीं पाया गया। मानक निगरानी जारी रखें।",
        
        // --- ALL 9 CROP DIAGNOSES (HI) ---
        "diag_tomato_bacterial_spot": "टमाटर - बैक्टीरियल स्पॉट",
        "diag_tomato_early_blight": "टमाटर - अगेती झुलसा",
        "diag_tomato_late_blight": "टमाटर - पछेती झुलसा",
        "diag_tomato_leaf_mold": "टमाटर - पत्ती मोल्ड",
        "diag_tomato_septoria": "टमाटर - सेप्टोरिया लीफ स्पॉट",
        "diag_tomato_spider_mites": "टमाटर - स्पाइडर माइट्स",
        "diag_tomato_target_spot": "टमाटर - टारगेट स्पॉट",
        "diag_tomato_yellow_virus": "टमाटर - पीला पत्ता कर्ल वायरस",
        "diag_tomato_mosaic_virus": "टमाटर - मोज़ेक वायरस",
        "diag_tomato_healthy": "टमाटर - स्वस्थ",
        "diag_potato_early_blight": "आलू - अगेती झुलसा",
        "diag_potato_late_blight": "आलू - पछेती झुलसा",
        "diag_potato_healthy": "आलू - स्वस्थ",
        "diag_corn_gray_spot": "मक्का - ग्रे लीफ स्पॉट",
        "diag_corn_common_rust": "मक्का - कॉमन रस्ट",
        "diag_corn_northern_blight": "मक्का - नॉर्दर्न लीफ ब्लाइट",
        "diag_corn_healthy": "मक्का - स्वस्थ",
        "diag_strawberry_leaf_scorch": "स्ट्रॉबेरी - लीफ स्कॉर्च",
        "diag_strawberry_healthy": "स्ट्रॉबेरी - स्वस्थ",
        "diag_apple_scab": "सेब - एप्पल स्कैब",
        "diag_apple_black_rot": "सेब - ब्लैक रॉट",
        "diag_apple_cedar_rust": "सेब - सीडर एप्पल रस्ट",
        "diag_apple_healthy": "सेब - स्वस्थ",
        "diag_pepper_bacterial_spot": "शिमला मिर्च - बैक्टीरियल स्पॉट",
        "diag_pepper_healthy": "शिमला मिर्च - स्वस्थ",
        "diag_cherry_powdery_mildew": "चेरी - पाउडरी मिल्ड्यू",
        "diag_cherry_healthy": "चेरी - स्वस्थ",
        "diag_grape_black_rot": "अंगूर - ब्लैक रॉट",
        "diag_grape_esca": "अंगूर - एस्का (ब्लैक मीसल्स)",
        "diag_grape_leaf_blight": "अंगूर - लीफ ब्लाइट",
        "diag_grape_healthy": "अंगूर - स्वस्थ",
        "diag_peach_bacterial_spot": "आड़ू - बैक्टीरियल स्पॉट",
        "diag_peach_healthy": "आड़ू - स्वस्थ",

        // --- ALL UNIVERSAL INSIGHTS (HI) ---
        "insight_copper_spray": "<strong>उपचार:</strong> तांबा आधारित जीवाणुनाशक स्प्रे का प्रयोग करें।",
        "insight_avoid_overhead_water": "<strong>रोकथाम:</strong> ऊपर से पानी देने से बचें; आधार पर पानी दें।",
        "insight_remove_lower_leaves": "<strong>तत्काल:</strong> संक्रमित निचली पत्तियों को हटा दें और नष्ट कर दें।",
        "insight_fungicide_chlorothalonil": "<strong>उपचार:</strong> क्लोरोथैलोनिल या मैनकोजेब युक्त कवकनाशी का प्रयोग करें।",
        "insight_remove_leaves": "<strong>तत्काल:</strong> सभी संक्रमित पत्तियों को हटा दें और नष्ट कर दें।",
        "insight_copper_fungicide": "<strong>उपचार:</strong> तांबा आधारित कवकनाशी का प्रयोग करें।",
        "insight_improve_airflow": "<strong>रोकथाम:</strong> हवा के संचार को बेहतर बनाने के लिए पौधों की छंटाई करें।",
        "insight_miticide_spray": "<strong>उपचार:</strong> माइटिसाइड या कीटनाशक साबुन का प्रयोग करें।",
        "insight_increase_humidity": "<strong>रोकथाम:</strong> माइट्स आर्द्रता से नफरत करते हैं; यदि घर के अंदर हैं तो पौधों पर पानी का छिड़काव करें।",
        "insight_remove_infected_plants": "<strong>तत्काल:</strong> पूरे पौधे को हटा दें और नष्ट कर दें। यह एक वायरस है और इसका इलाज नहीं किया जा सकता।",
        "insight_control_whiteflies": "<strong>रोकथाम:</strong> सफेद मक्खी की आबादी को नियंत्रित करें, क्योंकि वे वायरस फैलाती हैं।",
        "insight_control_insects": "<strong>रोकथाम:</strong> वायरस फैलाने वाले एफिड्स और थ्रिप्स को नियंत्रित करें।",
        "insight_crop_rotation": "<strong>रोकथाम:</strong> फसल चक्र अपनाएं; अगले साल उसी स्थान पर न लगाएं।",
        "insight_destroy_plants": "<strong>तत्काल:</strong> प्रसार को रोकने के लिए संक्रमित पौधों और कंदों को नष्ट कर दें।",
        "insight_targeted_fungicide": "<strong>उपचार:</strong> एक लक्षित कवकनाशी (जैसे, मैनकोजेब युक्त) का प्रयोग करें।",
        "insight_resistant_varieties": "<strong>रोकथाम:</strong> यदि आपके क्षेत्र में यह बीमारी आम है तो प्रतिरोधी किस्में लगाएं।",
        "insight_fungicide_if_severe": "<strong>उपचार:</strong> कवकनाशी का प्रयोग तभी करें जब संक्रमण गंभीर और जल्दी हो।",
        "insight_remove_infected_leaves": "<strong>तत्काल:</strong> बीजाणुओं को कम करने के लिए संक्रमित पत्तियों को हटा दें और जला दें।",
        "insight_fungicide_captan": "<strong>उपचार:</strong> एक कवकनाशी (जैसे, कैप्टन या माइक्लोबुटानिल) का प्रयोग करें।",
        "insight_remove_fallen_leaves": "<strong>रोकथाम:</strong> पतझड़ में सभी गिरी हुई पत्तियों को साफ करें और नष्ट कर दें।",
        "insight_prune_dead_wood": "<strong>तत्काल:</strong> किसी भी मृत या कैंकर वाली शाखाओं की छंटाई करें।",
        "insight_fungicide_myclobutanil": "<strong>उपचार:</strong> माइक्लोबुटानिल जैसे कवकनाशी का प्रयोग करें।",
        "insight_remove_juniper": "<strong>रोकथाम:</strong> आस-पास के जुनिपर पेड़ों को हटा दें, जो रस्ट के मेजबान हैं।",
        "insight_fungicide_sulfur": "<strong>उपचार:</strong> सल्फर आधारित कवकनाशी का प्रयोग करें।",
        "insight_remove_mummies": "<strong>रोकथाम:</strong> बेल से सभी सिकुड़े हुए 'ममीफाइड' अंगूरों को हटा दें और नष्ट कर दें।",
        "insight_no_chemical_cure": "<strong>उपचार:</strong> कोई रासायनिक इलाज नहीं है। संक्रमित लकड़ी को हटाने के लिए देर से सर्दियों में भारी छंटाई करें।",
        "insight_prune_peach": "<strong>रोकथाम:</strong> उपचार और वायु प्रवाह को बढ़ावा देने के लिए देर से वसंत में पेड़ों की छंटाई करें।",
    }
};

// --- 2. THE LANGUAGE & NOTIFICATION LOGIC (FINAL) ---
// (This code is complete. Do not edit.)

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });
    // This is a special rule for the result buttons, which are not always on the page
    document.querySelectorAll('.action-buttons a, .report-button').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });

    if (lang === 'hi') {
        document.getElementById('lang-hi').classList.add('active');
        document.getElementById('lang-en').classList.remove('active');
    } else {
        document.getElementById('lang-en').classList.add('active');
        document.getElementById('lang-hi').classList.remove('active');
    }
}

function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'en';
}

// Re-translates the result box when language is switched
function reTranslateResults() {
    const lang = getCurrentLanguage();
    // Re-translate results on scan.html
    document.querySelectorAll('#results-container [data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.action-buttons a, .report-button').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });
    
    // Re-translate results on field_scan.html
    document.querySelectorAll('#results-container [data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });
}

// --- This code runs on every page ---
document.addEventListener('DOMContentLoaded', () => {
    // Language buttons
    const langEN = document.getElementById('lang-en');
    const langHI = document.getElementById('lang-hi');
    if (langEN) langEN.addEventListener('click', () => {
        setLanguage('en');
        if (typeof reTranslateResults === 'function') reTranslateResults();
    });
    if (langHI) langHI.addEventListener('click', () => {
        setLanguage('hi');
        if (typeof reTranslateResults === 'function') reTranslateResults();
    });
    setLanguage(getCurrentLanguage());

    // --- Notification Bell Logic ---
    const bellIcon = document.getElementById('bell-icon');
    const bellDot = document.getElementById('bell-dot');
    const notificationMenu = document.getElementById('notification-menu');

    if (bellIcon) {
        bellIcon.addEventListener('click', () => {
            // Toggle the menu
            if (notificationMenu.style.display === 'block') {
                notificationMenu.style.display = 'none';
            } else {
                notificationMenu.style.display = 'block';
                if (bellDot) bellDot.style.display = 'none'; // Hide red dot when opened
            }
        });

        // Optional: Hide menu if clicking outside
        document.addEventListener('click', (event) => {
            if (bellIcon && !bellIcon.contains(event.target) && notificationMenu && !notificationMenu.contains(event.target)) {
                notificationMenu.style.display = 'none';
            }
        });
    }
});