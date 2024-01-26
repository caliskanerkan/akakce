import { Link, isRouteErrorResponse } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import Card from "~/common/components/card/Card";
import errorImage from "app/common/icons/error.svg";

export interface ErrorBoundaryProps {
  error: unknown;
  image?: string;
}

export const ErrorBoundary = ({
  error,
  image = errorImage,
}: ErrorBoundaryProps) => {
  const [message, setMessage] = useState("");

  const errorHandler = useCallback(() => {
    if (isRouteErrorResponse(error)) {
      const text = "Bir hata meydana geldi..";
      setMessage(text);
    } else if (error instanceof Error) {
      const text = error.message ?? `Bir hata meydana geldi..`;
      setMessage(text);
    } else {
      const text = "Bilinmeyen bir hata gerçekleşti.";
      setMessage(text);
    }
  }, [error]);

  useEffect(() => {
    errorHandler();
  }, [errorHandler]);

  return (
    <div className='h-layout flex items-center justify-center'>
      <div>
        <Card>
          <h6 className='font-semibold text-2xl text-gray-700 text-center'>
            {message}
          </h6>
          <p className='text-sm text-center'>
            Anasayfaya dönmek için lütfen &nbsp;
            <Link className='text-blue-500' to='/'>
              tıklayınız
            </Link>
          </p>
          <div>
            <img src={image} alt='Hata için bir arkaplan.' />
          </div>
        </Card>
      </div>
    </div>
  );
};
