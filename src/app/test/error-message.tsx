export function ErrorMessage({ error }: { error?: string }) {
  return (
    <>
      {error && (
        <p
          className="mt-2 text-sm text-red-500 mb-6 flex justify-center"
          key={error}
        >
          {error}
        </p>
      )}
    </>
  );
}
