import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

function PdfGenerator({ title, col, row, totalSectionArr }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    heading: {
      margin: 10,
    },
    table: {
      display: "table",
      width: "auto",
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableHead: {
      width: `${100 / col?.length}%` || "25%",
      borderBottom: "1px solid #efefef",
      color: "#7f8da2",
      backgroundColor: "#fbfbfb",
    },
    tableCol: {
      width: `${100 / col?.length}%` || "25%",
      borderBottom: "1px solid #efefef",
    },
    tableCell: {
      margin: 5,
      fontSize: 11,
      fontWeight: 400,
    },
  });

  return (
    <div>
      <PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.heading}>{title}</Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    {col?.map((data, index) => (
                      <View key={index} style={styles.tableHead}>
                        <Text style={styles.tableCell}>{data}</Text>
                      </View>
                    ))}
                  </View>
                  {row?.map((data, index) => (
                    <View key={index} style={styles.tableRow}>
                      {data?.map((data2, index2) => (
                        <View key={index2} style={styles.tableCol}>
                          <Text style={styles.tableCell}>{data2}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
                <View style={styles.tableRow}>
                  {totalSectionArr?.map((data, index) => (
                    <View key={index} style={styles.tableHead}>
                      <Text style={styles.tableCell}>{data}</Text>
                    </View>
                  ))}
                </View>
                </View>
              </View>
            </Page>
          </Document>
        }
        fileName={`${title}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Generating PDF..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default PdfGenerator;
