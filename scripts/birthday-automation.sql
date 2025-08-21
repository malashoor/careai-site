-- CareAI Birthday Automation Script
-- This script provides functions and queries for birthday message automation

-- 1. Check users with birthdays today
SELECT 
    p.id,
    p.full_name,
    p.email,
    p.phone_number,
    p.birthday,
    p.age,
    EXTRACT(YEAR FROM AGE(p.birthday)) as calculated_age,
    p.status
FROM public.profiles p
WHERE p.status = 'active'
AND EXTRACT(MONTH FROM p.birthday) = EXTRACT(MONTH FROM CURRENT_DATE)
AND EXTRACT(DAY FROM p.birthday) = EXTRACT(DAY FROM CURRENT_DATE)
AND p.birthday IS NOT NULL
ORDER BY p.full_name;

-- 2. Check users with birthdays this week
SELECT 
    p.id,
    p.full_name,
    p.email,
    p.phone_number,
    p.birthday,
    p.age,
    EXTRACT(YEAR FROM AGE(p.birthday)) as calculated_age,
    p.status,
    CASE 
        WHEN EXTRACT(DAY FROM p.birthday) = EXTRACT(DAY FROM CURRENT_DATE) THEN 'Today'
        WHEN EXTRACT(DAY FROM p.birthday) = EXTRACT(DAY FROM CURRENT_DATE + INTERVAL '1 day') THEN 'Tomorrow'
        ELSE 'This week'
    END as birthday_status
FROM public.profiles p
WHERE p.status = 'active'
AND p.birthday IS NOT NULL
AND (
    (EXTRACT(MONTH FROM p.birthday) = EXTRACT(MONTH FROM CURRENT_DATE) 
     AND EXTRACT(DAY FROM p.birthday) BETWEEN EXTRACT(DAY FROM CURRENT_DATE) 
     AND EXTRACT(DAY FROM CURRENT_DATE + INTERVAL '6 days'))
    OR
    (EXTRACT(MONTH FROM p.birthday) = EXTRACT(MONTH FROM CURRENT_DATE + INTERVAL '1 month')
     AND EXTRACT(DAY FROM p.birthday) BETWEEN 1 
     AND EXTRACT(DAY FROM CURRENT_DATE + INTERVAL '6 days') - EXTRACT(DAY FROM CURRENT_DATE))
)
ORDER BY p.birthday;

-- 3. Update last birthday message timestamp (run after sending messages)
-- UPDATE public.profiles 
-- SET last_birthday_message = CURRENT_TIMESTAMP
-- WHERE id IN (
--     SELECT p.id
--     FROM public.profiles p
--     WHERE p.status = 'active'
--     AND EXTRACT(MONTH FROM p.birthday) = EXTRACT(MONTH FROM CURRENT_DATE)
--     AND EXTRACT(DAY FROM p.birthday) = EXTRACT(DAY FROM CURRENT_DATE)
--     AND p.birthday IS NOT NULL
-- );

-- 4. Check for users who haven't received birthday messages recently
SELECT 
    p.id,
    p.full_name,
    p.email,
    p.phone_number,
    p.birthday,
    p.age,
    p.last_birthday_message,
    CASE 
        WHEN p.last_birthday_message IS NULL THEN 'Never sent'
        WHEN p.last_birthday_message < CURRENT_DATE - INTERVAL '1 year' THEN 'Over 1 year ago'
        ELSE 'Recent'
    END as message_status
FROM public.profiles p
WHERE p.status = 'active'
AND p.birthday IS NOT NULL
AND (
    p.last_birthday_message IS NULL 
    OR p.last_birthday_message < CURRENT_DATE - INTERVAL '1 year'
)
ORDER BY p.birthday;

-- 5. Birthday statistics
SELECT 
    COUNT(*) as total_active_users,
    COUNT(CASE WHEN p.birthday IS NOT NULL THEN 1 END) as users_with_birthday,
    COUNT(CASE WHEN p.birthday IS NULL THEN 1 END) as users_without_birthday,
    COUNT(CASE WHEN p.last_birthday_message IS NOT NULL THEN 1 END) as users_with_birthday_messages,
    COUNT(CASE WHEN p.last_birthday_message IS NULL THEN 1 END) as users_without_birthday_messages
FROM public.profiles p
WHERE p.status = 'active';

-- 6. Monthly birthday distribution
SELECT 
    EXTRACT(MONTH FROM p.birthday) as month,
    TO_CHAR(TO_DATE(EXTRACT(MONTH FROM p.birthday)::text, 'MM'), 'Month') as month_name,
    COUNT(*) as birthday_count
FROM public.profiles p
WHERE p.status = 'active'
AND p.birthday IS NOT NULL
GROUP BY EXTRACT(MONTH FROM p.birthday)
ORDER BY month;

-- Success message
SELECT 'Birthday automation queries ready! Use these to implement birthday message system.' as status;
