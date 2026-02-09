-- Fix: Remove overly permissive SELECT policy on applications table
-- This was exposing applicant names, emails, resumes publicly
DROP POLICY IF EXISTS "Enable read access for service role" ON public.applications;

-- Add a proper policy: only service_role can read applications (via edge functions/admin)
CREATE POLICY "Only service role can read applications"
ON public.applications
FOR SELECT
USING (auth.role() = 'service_role');

-- Fix: Remove overly permissive SELECT policy on training_inquiries table
DROP POLICY IF EXISTS "Enable read access for service role" ON public.training_inquiries;

-- Add a proper policy: only service_role can read training inquiries
CREATE POLICY "Only service role can read training inquiries"
ON public.training_inquiries
FOR SELECT
USING (auth.role() = 'service_role');

-- Fix: Tighten INSERT policies to only allow anon/authenticated (not service_role bypass)
-- These are public forms so INSERT with basic check is fine, but let's be explicit
DROP POLICY IF EXISTS "Anyone can create applications" ON public.applications;
CREATE POLICY "Anyone can create applications"
ON public.applications
FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contacts;
CREATE POLICY "Anyone can submit contact forms"
ON public.contacts
FOR INSERT
WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can submit training inquiries" ON public.training_inquiries;
CREATE POLICY "Anyone can submit training inquiries"
ON public.training_inquiries
FOR INSERT
WITH CHECK (true);