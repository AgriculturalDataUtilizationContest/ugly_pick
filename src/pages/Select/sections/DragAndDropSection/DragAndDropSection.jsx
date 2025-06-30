import { PlusIcon, X } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import styles from "./DragAndDropSection.module.css";

export const DragAndDropSection = ({ droppedItem, onReset }) => {
  return (
    <Card className={styles.container}>
      <CardContent className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.imageContainer}>
            {droppedItem ? (
              <div className={styles.droppedBox}>
                <button className={styles.closeButton} onClick={onReset}>
                  <X size={16} color="white" />
                </button>
                <img
                  src={droppedItem.image}
                  alt={droppedItem.name}
                  className={styles.droppedImage}
                />
                <div className={styles.droppedItemName}>{droppedItem.name}</div>
              </div>
            ) : (
              <div className={styles.outerCircle}>
                <div className={styles.middleCircle}>
                  <div className={styles.innerCircle}>
                    <PlusIcon className={styles.plusIcon} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.title}>Drag & Drop</h2>
            <p className={styles.description}>
              새로운 가격을 확인하고 시장 소매가와
              <br />
              비교하여 가격을 분석할 수 있어요
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
