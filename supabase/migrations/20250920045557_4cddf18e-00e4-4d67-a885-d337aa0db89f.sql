-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON public.applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);

-- Update the RLS policy to allow viewing applications (for admin purposes)
CREATE POLICY "Enable read access for service role" ON public.applications
    FOR SELECT USING (true);

-- Add a helpful view to see application details with job information
CREATE OR REPLACE VIEW public.applications_with_jobs AS
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

-- Grant access to the view
GRANT SELECT ON public.applications_with_jobs TO anon, authenticated;