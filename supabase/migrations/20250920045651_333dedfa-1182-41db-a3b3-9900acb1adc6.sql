-- Drop the previous view and recreate it without security definer issues
DROP VIEW IF EXISTS public.applications_with_jobs;

-- Create a secure view that respects RLS
CREATE VIEW public.applications_with_jobs 
WITH (security_invoker = true) AS
SELECT 
    a.id,
    a.name,
    a.email,
    a.cover_letter,
    a.resume_url,
    a.created_at,
    j.title as job_title,
    j.slug as job_slug,
    j.location as job_location,
    j.type as job_type
FROM public.applications a
LEFT JOIN public.jobs j ON a.job_id = j.id;