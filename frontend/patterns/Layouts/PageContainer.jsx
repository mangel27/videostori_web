import { Flex, useStyleConfig } from "@chakra-ui/react";

export const PageContainer = (props) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("PageContainer", { size, variant });
  return <Flex as="span" sx={styles} {...rest} />;
};
