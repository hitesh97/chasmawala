import React from "react";
import { Box } from "@chakra-ui/core";

const PrescriptionInfo = () => {
  return (
    <Box marginTop="20px">
      <Box as="h2" fontWeight="semibold" marginBottom="10px">
        Important information regarding prescriptions.
      </Box>
      <Box fontSize="0.8rem">
        Having a valid prescription when ordering glasses is essential.
        Ordinarily, we would verify your prescription with you as part of our
        normal checking process. However, given the current coronavirus
        situation and government advice, we realise that obtaining or verifying
        a copy of your prescription may be difficult. We have therefore
        suspended our usual verification process for prescriptions that you
        submit for the foreseeable future to ensure your order can be processed
        and dispatched to you without any further delay.
      </Box>
    </Box>
  );
};

export default PrescriptionInfo;
