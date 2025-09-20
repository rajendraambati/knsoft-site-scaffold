-- Add foreign key constraint to link applications to jobs
ALTER TABLE public.applications 
ADD CONSTRAINT applications_job_id_fkey 
FOREIGN KEY (job_id) REFERENCES public.jobs(id) ON DELETE CASCADE;

-- Add an index on job_id for better query performance
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON public.applications(job_id);

-- Add an index on created_at for sorting applications by date
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);

-- Update the RLS policy to allow admins to view applications (if needed)
-- This will help you view which job each applicant applied for
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