import { TailSpin, useLoading } from "@agney/react-loading";
import { FC } from "react";

type Props = {
  loading: boolean;
};

export const Loading: FC<Props> = ({ loading }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: loading,
    indicator: <TailSpin width="50" />,
  });

  return (
    <div className="flex items-center justify-center mt-10" {...containerProps}>
      {indicatorEl}
    </div>
  );
};
