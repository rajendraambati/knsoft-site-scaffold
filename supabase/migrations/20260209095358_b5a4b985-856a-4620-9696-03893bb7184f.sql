-- Fix: contacts table has no SELECT policy, exposing all contact form data publicly
-- Add a SELECT policy restricting reads to service_role only

CREATE POLICY "Only service role can read contacts"
ON public.contacts
FOR SELECT
USING (auth.role() = 'service_role');